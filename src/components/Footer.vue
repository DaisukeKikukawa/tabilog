<template>
  <div>
    <footer>
      <span>Copyright © 旅人のあつまり All Rights Reserved.</span>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #ffbf00;
  font-size: 15px;
  color: #fff;
}

@media (max-width: 670px) {
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    background-color: #ffbf00;
    font-size: 10px;
    color: #fff;
  }
}
</style>
