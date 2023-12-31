        var date = new Date();
        date.setDate(date.getDate()+3);

        var date2 = new Date();
        date2.setDate(date.getDate()-5);
        

        function setcookie(key,value){
            document.cookie = `${key}=${value};expires=${date}`;
        }

        function getcookie(key){

            var cookies = document.cookie;
            console.log(cookies);
            var arrofcookies = cookies.split(';');
        
            for(elem of arrofcookies){
                var arr = elem.split('=');
                
                    if(arr[0].trim()==key){
                            return arr[1];
                    }
                
            }
            return undefined;
        }

        function deletecookie(key){
            document.cookie = `${key}=null;expires=${date2}`;
        }