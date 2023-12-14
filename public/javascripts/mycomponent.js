let amostra = false;
let temChave = false;
let textoVisivel = false
let senhaAcertou = false
const senha= 4139

AFRAME.registerComponent('mycomponent',{
    events: {
        click: function(e){
            this.interageCofre();
        }
    },

    interageCofre: function(){
        const msgCofre = document.getElementById("msgCofre")
        
        msgCofre.setAttribute("animation","property: text.opacity; from: 1; to: 0; dur: 4000;");

        const cofreAberto= document.getElementById('cofre-aberto-ent');
        const cofreFechado= document.getElementById('cofre-fechado-ent');
        cofreAberto.setAttribute('visible','true');
        cofreFechado.setAttribute('visible','false');
        cofreFechado.setAttribute('position','-10 -10-10')
        temChave=true;
    },
});

AFRAME.registerComponent('notas',{
    events:{
        click:function() {
            const notaCaixa = document.getElementById("notaCaixa");
            
            if(!amostra){
                notaCaixa.setAttribute('visible','true');
                amostra = true;
            }else{
                notaCaixa.setAttribute('visible','false');
                amostra = false;
            }
        }
    }
});

AFRAME.registerComponent('porta',{
    events:{
        click:function(){
            if(!temChave){
                const msgPorta = document.getElementById('msgPorta');
                msgPorta.setAttribute("animation","property: text.opacity; from: 1; to: 0; dur: 4000;");
            }else{
                const porta = document.getElementById('portaEnt');
                porta.setAttribute("position","1.094 1.014 2.780");
                porta.setAttribute("rotation","0 180 0");
            }
        }
    }
});