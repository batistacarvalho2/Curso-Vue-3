app.component('product-display', {
    setup(){
        const image = ref("./assets/images/t-shirt-blue.png");
        const changeImage = (variantImage) =>{
            image.value = variantImage
        }

        const product_title = 'T-Shirt';
        const brand = "Marconyu";
        const titleWithBrand = computed(()=>{
            return product_title + " " + brand;
        });

        const inStock = 9;
        const inStockComputed = computed(()=>{
            if(inStock > 10)
                return "In Stock"
            else if (inStock <= 10 && inStock > 0)
                return "Amost of Stock"
            else
                return "Out of Stock"
        })
        
        return{                 
            image,      
            details: ['50% Cotton', '30% polyester', '20% wool'],
            variants:[
                {id:1,color:'blue', image: "./assets/images/t-shirt-blue.png"},
                {id:2, color:'green', image: "./assets/images/t-shirt-green.png"}
            ],
            changeImage,
            titleWithBrand,
            inStockComputed
        }
    },
    template:
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" alt="img-product" srcset="">
                </div>
                <div class="product-info">
                    <h1>{{ titleWithBrand }}</h1>
                    <p>{{ inStockComputed }}</p>
                    <ul>
                        <li v-for="detail in details">
                             {{ detail }}
                        </li>
                    </ul>
                    <div v-for="variant in variants" :key="variant.id" v-on:mouseover="changeImage(variant.image)" class="color-circle"
                    :style="{ backgroundColor: variant.color }">
                          
                    </div>
                    <button class="button" :class="{ disabledButton : inStock < 1}" @click="addTocart" :disabled="inStock < 1">Add To Cart</button>
                </div>
            </div>
        </div>`
})