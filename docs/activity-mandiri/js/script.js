function fn_ValForm(){
                var sMsg = "";
                var pattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/;

                if (document.getElementById("name").value == "") {
                    sMsg += "\n* Anda belum mengisikan nama";
                }
                if(document.getElementById("email").value == "") {
                    sMsg += "\n* Anda belum mengisikan email";
                }else if(!pattern.test(email)){
                    alert("Format email tidak valid! Contoh: user@example.com");
                }
                if(document.getElementById("message").value == "") {
                    sMsg += "\n* Anda belum mengisikan pesan";
                }

                if(sMsg != "") {
                    alert("Peringatan:\n" + sMsg);
                    return false;
                }else {
                    return true;
                }
            }