        // big screen
        function bigopennav(){
            document.querySelector('#sidebar').style.width = '225px'
            document.querySelector('#content').style.marginLeft = '225px'
            document.querySelector('#sidebarToggle').style.display = 'none'
            document.querySelector('#sidebarToggle2').style.display = 'block'
        }

        function bigclosenav(){
            document.querySelector('#sidebar').style.width = '0'
            document.querySelector('#content').style.marginLeft = '0'
            document.querySelector('#sidebarToggle2').style.display = 'none'
            document.querySelector('#sidebarToggle').style.display = 'block'
        }
        
        // small screen
        function smallopennav(){
            const togglebutton =  document.querySelector('#toggleimage')
            const sidenav = document.querySelector('#sidebar')
            sidenav.style.cssText = `width:210px;z-index:1000;`
            document.querySelector('.overlay').style.display = 'block'
            togglebutton.style.content = 'url(./images/icon-close.svg)'
            document.querySelector('#sidebarToggle').style.display = 'none'
            document.querySelector('#sidebarToggle2').style.display = 'block'
        }

        function smallclosenav(){
            const togglebutton =  document.querySelector('#toggleimage')
            document.querySelector('#sidebar').style.width = '0'
            document.querySelector('#content').style.marginLeft = '0'
            document.querySelector('.overlay').style.display = 'none'
            togglebutton.style.content = 'url(./images/icon-hamburger.svg)'
            document.querySelector('#sidebarToggle2').style.display = 'none'
            document.querySelector('#sidebarToggle').style.display = 'block'
        }

        document.addEventListener('DOMContentLoaded',function(){
            document.querySelector('#sidebarToggle2').style.display = 'none'
            document.querySelector('#sidebarToggle').addEventListener('click',function(){
                if (window.innerWidth <= 991){
                    smallopennav()  
                }
                else if (window.innerWidth >991){
                    bigopennav()
                }
            })
            document.querySelector('#sidebarToggle2').addEventListener('click',function(){
                if (window.innerWidth <= 991){
                    smallclosenav()
                }
                else if (window.innerWidth >991){
                    bigclosenav()
                }
            })
        })