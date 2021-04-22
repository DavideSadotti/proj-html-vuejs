var app = new Vue(
  {
    el: "#app",
    data: {
      navbar:[
        'Home',
        'About',
        'Services',
        'Blog',
        'Contact',
        'Portfolio'
      ],
      whatWeDo:[
        {
          image: 'img/group-1.png',
          title: 'Data Analysis',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        },
        {
          image: 'img/group-2.png',
          title: 'SEO Optimization',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        },
        {
          image: 'img/group-3.png',
          title: 'Security Data',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        },
        {
          image: 'img/group-4.png',
          title: 'Branding Strategy',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        }
      ],
      portfolio:[
        {
          image: 'img/dazzle.jpg',
          title: 'Basketo of Flower on table',
          text: 'Branding Strategy'
        },
        {
          image: 'img/dry.jpg',
          title: 'Purinky Products',
          text: 'Digital Experience'
        },
        {
          image: 'img/index.jpg',
          title: 'Satisfy Poster',
          text: 'Branding Strategy'
        },
        {
          image: 'img/mock-up.jpg',
          title: 'Mock-up',
          text: 'Design Strategy'
        },
        {
          image: 'img/index.jpg',
          title: 'IndexTv',
          text: 'Digital Experience'
        }
      ],
      priceList:[
        {
          title: 'Designing',
          what: 'PROCESS',
          price: 40,
          creative: 'Design Enabled',
          vibrant: 'Color Usage',
          eye: 'Catching Design',
          extreme: 'Typography',
          exceptional: 'Design'
        },
        {
          title: 'Developing',
          what: 'PRODUCT',
          price: 60,
          creative: 'Design Enabled',
          vibrant: 'Color Usage',
          eye: 'Catching Design',
          extreme: 'Typography',
          exceptional: 'Design'
        },
        {
          title: 'Supporting',
          what: 'CLIENTS',
          price: 80,
          creative: 'Design Enabled',
          vibrant: 'Color Usage',
          eye: 'Catching Design',
          extreme: 'Typography',
          exceptional: 'Design'
        }
      ],
      blog:[
        {
          title: 'Amazon gets CCI nod to acquire 49% stake in',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.',
          date: 'April 21, 2019',
          by: 'Paul',
          isActive: true
        },
        {
          title: 'Clearing Corporations get SEBI nod to invest in overnight funds',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.',
          date: 'April 21, 2019',
          by: 'Paul',
          isActive: false
        },
        {
          title: 'Shabnam Dhillion, wife of RSSB chief Gurinder Dhillon, passes away in London',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.',
          date: 'April 21, 2019',
          by: 'Paul',
          isActive: false
        }
      ],
      testimonial:[
        {
          image: 'img/szabo-viktor.png',
          rate: 4,
          text: 'When, while lovely valley teems with vapour around meand meridian sun strike the upper impenetrable foliage of my trees, and but a thousand.',
          who: 'Szabo Viktor',
          position: 'Marketing Management'
        },
        {
          image: 'img/philipe-cavalcante.png',
          rate: 3,
          text: 'When, while lovely valley teems with vapour around meand meridian sun strike the upper impenetrable foliage of my trees, and but a thousand.',
          who: 'Philipe Cavalcante',
          position: 'Marketing Management'
        },
        {
          image: 'img/fabio-spinelli.png',
          rate: 5,
          text: 'When, while lovely valley teems with vapour around meand meridian sun strike the upper impenetrable foliage of my trees, and but a thousand.',
          who: 'Fabio Spinelli',
          position: 'Marketing Management'
        }
      ],
      client:[
        'img/client-1.png',
        'img/client-2.png',
        'img/client-3.png',
        'img/client-4.png',
        'img/client-5.png',
      ],
      social:[
        'instagram',
        'linkedin-in',
        'facebook-f',
        'twitter'
      ],
      link:[
        'Services',
        'Contact',
        'Blog'
      ],
      resources:[
        'Art Design',
        'Computer',
        'IT News',
        'Networking',
        'Web Security'
      ],
      contact:{
          address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
          phone: '+99 (0) 101 0000 888',
          email: 'info@yourdomain.com'
        }
    },
    methods: {
      toCapitalize: function(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
      },
      hoverOpenBox: function(index){
        for(var i = 0; i < this.blog.length; i++){
          if(i == index){
            this.blog[index].isActive = true;
          }else{
            this.blog[i].isActive = false
          }
        }
      },
      topFunction: function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  }
);
