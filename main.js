$('document').ready(function(){
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000 ');
    });
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            endereco:{
                required:false
            },
            cep:{
                required:true
            }
        },
        messages:{
            nome:'Por favor insira seu nome',
            telefone:'por favor insira o dd de sua região e seu numero corretamente',
            email:'insira seu email corretamente',
            cpf:'insira seu cpf corretamente',
            cep:'insira seu cep corretamente'
            
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
        });
