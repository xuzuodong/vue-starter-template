<script setup lang="ts">
import IconCarbonCampsite from '~icons/carbon/campsite'
const name = ref('')

const router = useRouter()
const go = () => {
    if (name.value)
        router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <icon-carbon-campsite class="inline-block" />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">Opinionated Vite Starter Template</em>
    </p>
    <p><img /></p>
    <div>
      multiline
      content
    </div>
    <div></div>
    <div class="py-4"></div>

    <the-input
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    />

    <div>
      <button
        type="button"
        class="m-3 text-sm text-white bg-green-800 px-4 rounded cursor-pointer"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
