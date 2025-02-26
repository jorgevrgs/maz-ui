---
title: MazCard
description: MazCard is a standalone component to display some texts, images and you can add buttons actions
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<!--@include: ./../.vitepress/mixins/getting-started.md-->

## Basic usage

<MazCard :images="images" :gallery-height="400" >
  <template #title>
    <h4 class="maz-m-0">
      Steven Seagal
    </h4>
  </template>
  <template #subtitle>
    <h5 class="maz-m-0">
      Actor
    </h5>
  </template>
  <template #content>
    <p class="maz-text-muted maz-m-0">
      You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
    </p>
  </template>
  <template #actions>
    <MazBtn
      size="sm"
      fab
      color="danger"
      class="maz-mr-2"
    >
      <strong>2</strong>
    </MazBtn>
    <MazBtn
      size="sm"
      color="white"
    >
      <strong>5</strong>
    </MazBtn>
  </template>
</MazCard>

<script setup>
  import { ref } from 'vue'
  const images = ref(['https://placekitten.com/600/600'])
</script>

```vue
<template>
  <MazCard :images="images" zoom>
    <template #title>
      <h4>
        Steven Seagal
      </h4>
    </template>
    <template #subtitle>
      <h5>
        Actor
      </h5>
    </template>
    <template #content>
      <p class="maz-text-muted">
        You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
      </p>
    </template>
    <template #actions>
      <MazBtn
        size="sm"
        fab
        color="danger"
      />
      <MazBtn
        size="sm"
        color="white"
      >
        <strong>5</strong>
      </MazBtn>
    </template>
  </MazCard>
</template>

<script lang="ts" setup>
  import MazCard from 'maz-ui/components/MazCard'
  import { ref } from 'vue'
  const images = ref(['https://placekitten.com/600/600'])
</script>
```

## Options

### collapsable

Ref props: `collapsable` & `collapse-open`
packages/docs/docs/components/maz-card.md
<br />

<MazCard collapsable style="width: 100%; margin-bottom: 16px;">
  <template #header>
    <h4 class="maz-m-0">
      Steven Seagal
    </h4>
  </template>
  <template #content>
    <div style="padding: 16px;">
      <p class="maz-m-0">
        You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
      </p>
    </div>
  </template>
</MazCard>

<MazCard collapsable collapse-open style="width: 100%;">
  <template #header>
    <h4 class="maz-m-0">
      Steven Seagal
    </h4>
  </template>
  <template #content>
    <div style="padding: 16px;">
      <p class="maz-m-0">
        You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
      </p>
    </div>
  </template>
</MazCard>

```vue
<template>
  <MazCard collapsable style="width: 100%; margin-bottom: 16px;">
    <template #header>
      <h4 class="maz-m-0">
        Steven Seagal
      </h4>
    </template>
    <template #content>
      <div style="padding: 16px;">
        <p class="maz-m-0">
          You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
        </p>
      </div>
    </template>
  </MazCard>

  <MazCard collapsable collapse-open style="width: 100%;">
    <template #header>
      <h4 class="maz-m-0">
        Steven Seagal
      </h4>
    </template>
    <template #content>
      <div style="padding: 16px;">
        <p class="maz-m-0">
          You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!
        </p>
      </div>
    </template>
  </MazCard>
</template>
```

## Props & Events emitted

<ComponentPropDoc component="MazCard" />
