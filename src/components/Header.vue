<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="" class="header__logo" />
    <slot name="search"></slot>
    <slot name="navigation"></slot>
  </div>
</template>

<style>
.header {
  width: 100%;
  padding: 10px 0px;
  background: #22251c;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  width: 80px;
}
</style>