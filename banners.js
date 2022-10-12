const BannerComponent = {
    isLoading: true,
  
    //uk 699tk per kg banner removed.
    usaLargeBanners: [ 
        {
            name: "1",
            link: "image/banner/usa/1.png"
        },
        {
            name: "2",
            link: "image/banner/usa/2.png"
        },
        {
            name: "3",
            link: "image/banner/usa/3.png"
        },
    ],
    usaSmallBanners: [
        {
            name: "1",
            link: "image/banner/usa/4.png"
        },
  
    ],
  
    ukLargeBanners: [
       
        {
            name: "1",
            link: "image/banner/uk/2.png"
        },
        {
            name: "2",
            link: "image/banner/uk/5.png"
        },
        {
            name: "3",
            link: "image/banner/uk/4.png"
        },
        
    ],
    ukSmallBanners: [
        {
          name: "1",
          link: "image/banner/uk/7.jpeg"
        },

    ],
    cadLargeBanners: [
    
        {
            name: "1",
            //link: "image/banner/cad/large_1.jpg"
            likn: "https://i.ibb.co/cTDWZVk/Canada-Big-Banner-01.jpg"
        },
        
    ],
    cadSmallBanners: [
        {
          name: "1",
          //link: "image/banner/cad/small_1.jpg"
          link: "https://i.ibb.co/S6961HM/Canada-Small-Banner.jpg"
      },
    ],
    // uaeLargeBanners: [
    //     // {
    //     //     name: "2",
    //     //     link: "image/banner/uk/699_large.jpeg"
    //     // },
    //     {
    //         name: "2",
    //         link: "image/banner/uk/2.png"
    //     },
        
    // ],
    // uaeSmallBanners: [
    //     // {
    //     //     name: "7",
    //     //     link: "image/banner/uk/699_small.jpeg"
    //     // },
    //     {
    //       name: "1",
    //       link: "image/banner/usa/echodot.jpg"
    //   },
    // ],
  
    init() {
        // this.isLoading = false
    },
  
    getImages(size) {
        let countryCode = this.countryCodeFromLocation()
        let bannersByCountryCode = {
            usa: {
                large: this.usaLargeBanners,
                small: this.usaSmallBanners
            },
            uk: {
                large: this.ukLargeBanners,
                small: this.ukSmallBanners
            }
            // cad: {
            //     large: this.cadLargeBanners,
            //     small: this.cadSmallBanners
            // },
            // uae: {
            //     large: this.cadLargeBanners,
            //     small: this.cadSmallBanners
            // }
        }
        let bannerByCountryCode = bannersByCountryCode[countryCode][size]
        return bannerByCountryCode
    },
  
    countryCodeFromLocation() {
        let queryString = window.location.search
        if (!queryString) return 'usa'
  
        let urlParams = new URLSearchParams(queryString)
        let countryCode = urlParams.get("countryCode")
        return countryCode
    },
  
    createBanner(images, bannerClass) {
        let self = this
        let html = `<div class="splide__track"><ul class="splide__list">`
  
        images.forEach(image => {
            html += `<img src="${assetUrl}${image.link}" class="img-responsive splide__slide">`
        })
  
        html += `</div></div>`
  
        setTimeout(function () {
            new Splide(`.${bannerClass}`, {
                type: 'fade',
                rewind: true,
                cover: true,
                autoHeight: false,
                pagination: false,
                fixedHeight: '25rem',
                autoplay: true,
                interval: 3000,
                cover: true,
            }).mount();
  
            self.isLoading = false
        }, 100)
        return html
    },
}
  
