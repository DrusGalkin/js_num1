document.querySelector('.otpr_1').onclick = Click1;

function Click1(){
    const first = document.querySelector('#one').value;
    const text_ = document.querySelector('.out');
        text_.style.paddingTop = "10px";
        if(first == '1'){
            document.querySelector('.out').innerHTML = 'Красава';
        }

        else if(first == '2'){
            document.querySelector('.out').innerHTML = 'лох';
        }

        else if(first == '3'){
            document.querySelector('.out').innerHTML = 'слыш, нормально общайся';
        }

        else if(first >= '4'){
            document.querySelector('.out').innerHTML = 'тебе задание не понятно?';
        }

        else{
            document.querySelector('.out').innerHTML = '';
        }
}