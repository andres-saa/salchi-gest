<template>
    <div cal style="margin-top: 6rem;">

        <div class="shadow-4" style="max-width: 900px;overflow: hidden; border-radius: 1rem; margin: auto;">
            <div v-for=" imagen in [1, 2, 3, 4]">

                <img style="width: 100%;" :src="`/images/info/${imagen}.jpeg`" alt="">

            </div>
        </div>

    </div>
</template>

<script setup>




const images = [

]

</script>