<template>
<div class="col-12 m-auto p-0" style="max-width:1280px ;"> 


    <div id="loading" class="col-12" style="display: flex;align-items: center;height: 100%;justify-content: center;">
        <ProgressSpinner class="col-12 m-auto"  strokeWidth="3" fill="var(--surface-ground)"
    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>


    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYQx-qp0_y8NTfr0dIt5DVohEe1vEWvILdYnLgQzwcdJhi3Q/viewform?embedded=true" onload="document.getElementById('loading').style.display='none';" width=100%  frameborder="0" marginheight="0" marginwidth="0" style="width: 100%;height: 85vh;">Cargando…</iframe>


</div>
</template> 

