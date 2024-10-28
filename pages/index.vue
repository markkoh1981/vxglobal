<template>
  <main class="flex-1 flex flex-col !font-inter">
    <header class="flex items-center p-8">
      <div class="flex-1">
        <Logo class="w-6 h-6" />
      </div>
      <div class="flex space-x-2">
        <a>Telegram</a>
        <p>/</p>
        <a>Twitter</a>
        <p>/</p>
        <a>Discord</a>
      </div>
    </header>
    <div class="flex-1 flex flex-col items-center justify-center space-y-4">
      <div class="flex flex-col items-center justify-center space-y-2">
        <h1
          class="text-6xl font-black bg-gradient-to-r from-white via-white/75 to-white/50 text-transparent bg-clip-text"
        >
          Coming soon
        </h1>
        <p class="text-white/75">
          Dealflow, business development and portfolio management
        </p>
      </div>
      <div>
        <button class="bg-white text-black rounded px-4 py-2">
          Join community
        </button>
      </div>
    </div>
    <div
      class="flex items-center space-x-2 bg-amber text-black p-4 overflow-x-hidden"
    >
      <div
        v-for="i in 100"
        class="flex items-center space-x-2"
      >
        <p class="text-nowrap">COMING SOON</p>
        <div class="w-2 h-2 bg-black rounded-full" />
      </div>
    </div>
  </main>
</template>
