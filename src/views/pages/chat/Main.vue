<template>

    <div class="main-container">
        <div class="top-bar">
            <div class="top-bar-left">
                <img style="grid-area: imagen;" class="cliente-img" src="https://picsum.photos/50/50?random=1" alt="Imagen del cliente">
                <div class="top-bar-info">

                    <strong><h5>Cliente 2</h5></strong>
                    <span>Click para ver informacion</span>
                </div>
            </div>
            <div>
                <Button text>
                    <i class="pi pi-search text-2xl text-white"></i>

                </Button>
                <Button text>
                    <i class="pi pi-bars text-2xl text-white"></i>

                </Button>
            </div>
        </div>



        
        <div></div>
        <div class="chat-bar">
            <div class="message-area">
                <Button text>
                    <i class="pi pi-plus text-2xl text-white"></i>

                </Button>
      

                    <textarea class="message" />
           
            </div>
            <div >
                <Button text>
                    <i class="pi pi-microphone text-2xl text-white"></i>
                </Button>
               
            </div>
        </div>

    </div>
</template>


<style scoped>

.main-container{
    width:100%;
    background-color:#ffffff11;
    display:grid;
    height: calc(100%  - 2rem);
    border-radius: .5rem;
    grid-template-rows: 4.5rem 1fr max-content;
    /* border-right: 4px solid #222c33; */
    /* align-items: s;?; */

}

.message-area{
    width: 100%;
    display: flex;
}
h5{
    margin: 0;
    padding: 0;
    color: white;
}


.top-bar-info{
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.336);
    gap: .5rem;
}

.top-bar-left{
    display: flex;
    gap: 1rem;
}

.top-bar{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.062);
    height: 100%;
    display: flex;
    padding: 1rem .5rem;
    align-items: center;
    justify-content: space-between;
}


.chat-bar{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.062);
    height: 100%;
    display: flex;
    padding: 1rem .5rem;
    align-items: center;
    justify-content: space-between;
}


.cliente-img{
    border-radius: 50%;
    height: 100%;
    aspect-ratio: 1 / 1;
}

.message{
    background-color: rgba(255, 255, 255, 0.103);
    border:none;
    border-radius: .5rem;
    resize:vertical;
    width: 100%;
    max-height: 20rem;
    color: white;
    font-family: roboto;
    font-size: medium;
    padding: 1rem 1rem 0 1rem;
    border: none;
    min-height: min-content;
    outline: none;
}


.chat-bar{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.062);
    height: 100%;
}

.sidebar-container{
    width:100%;
    background-color:#ffffff11;
    display:flex;
    flex-direction: column;
    /* padding: 1rem; */
    height: calc(100%  - 2rem);
    border-radius: .5rem;
    /* max-height: 80vh; */
    max-height: calc(100vh - 5rem);
    gap:  1rem;
    grid-template-rows: 3rem 3rem min-content 1fr;
    /* border-right: 4px solid #222c33; */
    /* align-items: s;?; */

}


</style>