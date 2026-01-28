<script setup>
import { useJobApplicationCounter } from "@/composables/counter";
import { useOptionsPage } from "@/composables/options";
import { useSidePanel } from "@/composables/side-panel";

const { counter } = useJobApplicationCounter();
const { openOptionsPage } = useOptionsPage();
const { isVisible, closeSidePanel, openSidePanel } = useSidePanel();
</script>

<template>
  <hr></hr>
  <header class="container">
    <h3>Job Application Logger</h3>
    <section>
      <h4>{{ counter }} <sub>apps logged</sub></h4>
    </section>
  </header>
  <hr></hr>
  <main class="container">
    <h6>Actions</h6>
    <section>
      <input
        class="contrast"
        type="button"
        value="Open Settings"
        @click="openOptionsPage"
      />
      <button v-if="isVisible" type="button" @click="closeSidePanel">
        Close Side Panel
      </button>
      <button
        v-else
        data-tooltip="CTRL/CMD + B"
        data-placement="bottom"
        type="button"
        @click="openSidePanel"
      >
        Open Side Panel
      </button>
    </section>
  </main>
  <hr></hr>
  <footer class="container">
    <hgroup>
      <h6>Links</h6>
      <nav
        aria-label="breadcrumb"
        style="--pico-nav-breadcrumb-divider: &quot;✨&quot;"
      >
        <ul>
          <li>
            <a
              href="https://github.com/lps-dot-dev/job-application-logger"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="https://lps.dev/" target="_blank"> About Me </a>
          </li>
        </ul>
      </nav>
      <p>Hang in there! Don't Give Up! 🖤</p>
    </hgroup>
  </footer>
  <hr></hr>
</template>
