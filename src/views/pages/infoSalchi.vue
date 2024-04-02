<template>
    <div >

        <div style="max-width: 900px; margin: auto;" v-for=" imagen in [1,2,3,4]">

            <img style="width: 100%;" :src="`/images/info/${imagen}.jpeg`" alt="">

        </div>
    </div>
</template>

<script setup>




const images = [

]

</script>