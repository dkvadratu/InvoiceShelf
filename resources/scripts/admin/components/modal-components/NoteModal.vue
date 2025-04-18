<template>
  <BaseModal :show="modalActive" @close="closeNoteModal" @open="setFields">
    <template #header>
      <div class="flex justify-between w-full">
        {{ modalStore.title }}
        <BaseIcon
          name="XMarkIcon"
          class="h-6 w-6 text-gray-500 cursor-pointer"
          @click="closeNoteModal"
        />
      </div>
    </template>
    <form action="" @submit.prevent="submitNote">
      <div class="px-8 py-8 sm:p-6">
        <BaseInputGrid layout="one-column">
          <BaseInputGroup
            :label="$t('settings.customization.notes.name')"
            variant="vertical"
            :error="
              v$.currentNote.name.$error &&
              v$.currentNote.name.$errors[0].$message
            "
            required
          >
            <BaseInput
              v-model="noteStore.currentNote.name"
              :invalid="v$.currentNote.name.$error"
              type="text"
              @input="v$.currentNote.name.$touch()"
            />
          </BaseInputGroup>

          <BaseInputGroup
            :label="$t('settings.customization.notes.type')"
            :error="
              v$.currentNote.type.$error &&
              v$.currentNote.type.$errors[0].$message
            "
            required
          >
            <BaseMultiselect
              v-model="noteStore.currentNote.type"
              :options="types"
              value-prop="value"
              class="mt-2"
            />
          </BaseInputGroup>
          <BaseSwitchSection
            v-model="noteStore.currentNote.is_default"
            :title="$t('settings.customization.notes.is_default')"
            :description="$t('settings.customization.notes.is_default_description')"
_          />

          <BaseInputGroup
            :label="$t('settings.customization.notes.notes')"
            :error="
              v$.currentNote.notes.$error &&
              v$.currentNote.notes.$errors[0].$message
            "
            required
          >
            <BaseCustomInput
              v-model="noteStore.currentNote.notes"
              :invalid="v$.currentNote.notes.$error"
              :fields="fields"
              @input="v$.currentNote.notes.$touch()"
            />
          </BaseInputGroup>
        </BaseInputGrid>
      </div>
      <div
        class="
          z-0
          flex
          justify-end
          px-4
          py-4
          border-t border-solid border-gray-light
        "
      >
        <BaseButton
          class="mr-2"
          variant="primary-outline"
          type="button"
          @click="closeNoteModal"
        >
          {{ $t('general.cancel') }}
        </BaseButton>

        <BaseButton
          :loading="isSaving"
          :disabled="isSaving"
          variant="primary"
          type="submit"
        >
          <template #left="slotProps">
            <BaseIcon name="ArrowDownOnSquareIcon" :class="slotProps.class" />
          </template>
          {{ noteStore.isEdit ? $t('general.update') : $t('general.save') }}
        </BaseButton>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { required, minLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useModalStore } from '@/scripts/stores/modal'
import { useNotificationStore } from '@/scripts/stores/notification'
import { useNotesStore } from '@/scripts/admin/stores/note'
import { useInvoiceStore } from '@/scripts/admin/stores/invoice'
import { usePaymentStore } from '@/scripts/admin/stores/payment'
import { useEstimateStore } from '@/scripts/admin/stores/estimate'

const modalStore = useModalStore()
const notificationStore = useNotificationStore()
const noteStore = useNotesStore()
const invoiceStore = useInvoiceStore()
const paymentStore = usePaymentStore()
const estimateStore = useEstimateStore()

const route = useRoute()
const { t } = useI18n()

let isSaving = ref(false)
const types = reactive([
  {label: t('settings.customization.notes.types.invoice'), value: 'Invoice'},
  {label: t('settings.customization.notes.types.estimate'), value: 'Estimate'},
  {label: t('settings.customization.notes.types.payment'), value: 'Payment'}
])
let fields = ref(['customer', 'customerCustom'])

const modalActive = computed(() => {
  return modalStore.active && modalStore.componentName === 'NoteModal'
})

const rules = computed(() => {
  return {
    currentNote: {
      name: {
        required: helpers.withMessage(t('validation.required'), required),
        minLength: helpers.withMessage(
          t('validation.name_min_length', { count: 3 }),
          minLength(3)
        ),
      },
      notes: {
        required: helpers.withMessage(t('validation.required'), required),
      },
      type: {
        required: helpers.withMessage(t('validation.required'), required),
      },
    },
  }
})

const v$ = useVuelidate(
  rules,
  computed(() => noteStore)
)

watch(
  () => noteStore.currentNote.type,
  (val) => {
    setFields()
  }
)

onMounted(() => {
  if (route.name === 'estimates.create') {
    noteStore.currentNote.type = 'Estimate'
  } else if (route.name === 'invoices.create' || route.name === 'recurring-invoices.create') {
    noteStore.currentNote.type = 'Invoice'
  } else {
    noteStore.currentNote.type = 'Payment'
  }
})

function setFields() {
  fields.value = ['customer', 'customerCustom']

  if (noteStore.currentNote.type == 'Invoice') {
    fields.value.push('invoice', 'invoiceCustom')
  }

  if (noteStore.currentNote.type == 'Estimate') {
    fields.value.push('estimate', 'estimateCustom')
  }

  if (noteStore.currentNote.type == 'Payment') {
    fields.value.push('payment', 'paymentCustom')
  }
}

async function submitNote() {
  v$.value.currentNote.$touch()
  if (v$.value.currentNote.$invalid) {
    return true
  }

  isSaving.value = true
  if (noteStore.isEdit) {
    let data = {
      id: noteStore.currentNote.id,
      ...noteStore.currentNote,
    }
    await noteStore
      .updateNote(data)
      .then((res) => {
        isSaving.value = false
        if (res.data) {
          notificationStore.showNotification({
            type: 'success',
            message: t('settings.customization.notes.note_updated'),
          })
          modalStore.refreshData ? modalStore.refreshData() : ''
          closeNoteModal()
        }
      })
      .catch((err) => {
        isSaving.value = false
      })
  } else {
    await noteStore
      .addNote(noteStore.currentNote)
      .then((res) => {
        isSaving.value = false
        if (res.data) {
          notificationStore.showNotification({
            type: 'success',
            message: t('settings.customization.notes.note_added'),
          })

          if (
            (route.name === 'invoices.create' &&
              res.data.data.type === 'Invoice') ||
            (route.name === 'invoices.edit' && res.data.data.type === 'Invoice')
          ) {
            invoiceStore.selectNote(res.data.data)
          }

          if (
            (route.name === 'estimates.create' &&
              res.data.data.type === 'Estimate') ||
            (route.name === 'estimates.edit' &&
              res.data.data.type === 'Estimate')
          ) {
            estimateStore.selectNote(res.data.data)
          }

          if (
            (route.name === 'payments.create' &&
              res.data.data.type === 'Payment') ||
            (route.name === 'payments.edit' && res.data.data.type === 'Payment')
          ) {
            paymentStore.selectNote(res.data.data)
          }
        }

        modalStore.refreshData ? modalStore.refreshData() : ''
        closeNoteModal()
      })
      .catch((err) => {
        isSaving.value = false
      })
  }
}

function closeNoteModal() {
  modalStore.closeModal()

  setTimeout(() => {
    noteStore.resetCurrentNote()
    v$.value.$reset()
  }, 300)
}
</script>

<style lang="scss">
.note-modal {
  .header-editior .editor-menu-bar {
    margin-left: 0.5px;
    margin-right: 0px;
  }
}
</style>
