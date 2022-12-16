//STOPOTS
//add jquery to the page
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/*
FND
COR
OBJETO
ANIMAL
COMIDA
PCH
NOME
CEP
MUSICA
VERBO
MSÉ
BANDA
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

var letra = $("#letter").find('span').html();

console.log(letra);

var arrays = new Array();

var tipoFnd = new Array();
var tipoCor = new Array();
var tipoObjeto = new Array();
var tipoAnimal = new Array();
var tipoComida = new Array();
var tipoPch = new Array();
var tipoNome = new Array();
var tipoCep = new Array();
var tipoMusica = new Array();
var tipoVerbo = new Array();
var tipoMse = new Array();
var tipoBanda = new Array();


tipoFnd.push("as Branquelas");//0
tipoFnd.push("batman");//1
tipoFnd.push("coringa");//2
tipoFnd.push("dora a Aventureira");//3
tipoFnd.push("esquadrao Suicida");//4
tipoFnd.push("frozen");//5
tipoFnd.push("godzilla");//6
tipoFnd.push("homem aranha");//7
tipoFnd.push("inspetor Bugiganga");//8
tipoFnd.push("jumanji");//9
tipoFnd.push("lilo Stitch");//10
tipoFnd.push("madagascar");//11
tipoFnd.push("nasce uma Estrela");//12
tipoFnd.push("os Intocáveis");//13
tipoFnd.push("pokemon");//14
tipoFnd.push("rei Leao");//15
tipoFnd.push("star Wars");//16
tipoFnd.push("titanic");//17
tipoFnd.push("uma Noite No Museu");//18
tipoFnd.push("velozes e Furiosos");//19
tipoFnd.push("x-Men");//20
tipoFnd.push("ze Colmeia");//21

tipoCor.push("azul");//0
tipoCor.push("branco");//1
tipoCor.push("cinza");//2
tipoCor.push("dourado");//3
tipoCor.push("esmeralda");//4
tipoCor.push("fúcsia");//5
tipoCor.push("gelo");//6
tipoCor.push("herbal");//7
tipoCor.push("indigo");//8
tipoCor.push("jade");//9
tipoCor.push("lilás");//10
tipoCor.push("magenta");//11
tipoCor.push("neve");//12
tipoCor.push("ocre");//13
tipoCor.push("púrpura");//14
tipoCor.push("rosa");//15
tipoCor.push("salmão");//16
tipoCor.push("turquesa");//17
tipoCor.push("urucum");//18
tipoCor.push("violeta");//19
tipoCor.push("xCor com X");//20
tipoCor.push("zCor com Z");//21

tipoObjeto.push("almofada");//0
tipoObjeto.push("bola");//1
tipoObjeto.push("caneca");//2
tipoObjeto.push("dado");//3
tipoObjeto.push("espada");//4
tipoObjeto.push("furadeira");//5
tipoObjeto.push("guitarra");//6
tipoObjeto.push("hidrante");//7
tipoObjeto.push("isqueiro");//8
tipoObjeto.push("jarra");//9
tipoObjeto.push("lapiseira");//10
tipoObjeto.push("mochila");//11
tipoObjeto.push("navalha");//12
tipoObjeto.push("oculos de Sol");//13
tipoObjeto.push("pochete");//14
tipoObjeto.push("relogio");//15
tipoObjeto.push("sapato");//16
tipoObjeto.push("teclado");//17
tipoObjeto.push("umidificador de ar");//18
tipoObjeto.push("ventilador");//19
tipoObjeto.push("xicara");//20
tipoObjeto.push("ziper");//21

tipoAnimal.push("arara");//0
tipoAnimal.push("boi");//1
tipoAnimal.push("cobra");//2
tipoAnimal.push("dromedário");//3
tipoAnimal.push("esquilo");//4
tipoAnimal.push("foca");//5
tipoAnimal.push("gorila");//6
tipoAnimal.push("hipopótamo");//7
tipoAnimal.push("iguana");//8
tipoAnimal.push("jabuti");//9
tipoAnimal.push("lontra");//10
tipoAnimal.push("morcego");//11
tipoAnimal.push("naja");//12
tipoAnimal.push("ovelha");//13
tipoAnimal.push("pato");//14
tipoAnimal.push("raposa");//15
tipoAnimal.push("sapo");//16
tipoAnimal.push("tarantula");//17
tipoAnimal.push("urso");//18
tipoAnimal.push("vaca");//19
tipoAnimal.push("ximango do campo");//20
tipoAnimal.push("zebra");//21

tipoComida.push("abacate");//0
tipoComida.push("bolo");//1
tipoComida.push("carne");//2
tipoComida.push("danone");//3
tipoComida.push("empada");//4
tipoComida.push("feijoada");//5
tipoComida.push("goiabada");//6
tipoComida.push("hamburguer");//7
tipoComida.push("iogurte");//8
tipoComida.push("jabuticaba");//9
tipoComida.push("lasanha");//10
tipoComida.push("macarrao");//11
tipoComida.push("nozes");//12
tipoComida.push("omelete");//13
tipoComida.push("pimentao recheado");//14
tipoComida.push("rabanada");//15
tipoComida.push("sopa");//16
tipoComida.push("tofu");//17
tipoComida.push("uvas");//18
tipoComida.push("vagem");//19
tipoComida.push("xarope");//20
tipoComida.push("zaatar (comida arabe)");//21

tipoPch.push("abdomen");//0
tipoPch.push("boca");//1
tipoPch.push("cabelo");//2
tipoPch.push("diafragma");//3
tipoPch.push("esofago");//4
tipoPch.push("figado");//5
tipoPch.push("garganta");//6
tipoPch.push("hipofise");//7
tipoPch.push("intestino");//8
tipoPch.push("joelho");//9
tipoPch.push("lingua");//10
tipoPch.push("mao");//11
tipoPch.push("nariz");//12
tipoPch.push("olho");//13
tipoPch.push("panturrilha");//14
tipoPch.push("rim");//15
tipoPch.push("sangue");//16
tipoPch.push("tornozelo");//17
tipoPch.push("umbigo");//18
tipoPch.push("veia");//19
tipoPch.push("xNaoExiste");//20
tipoPch.push("zigomatico");//21

tipoNome.push("alice");//0
tipoNome.push("bruno");//1
tipoNome.push("caio");//2
tipoNome.push("diego");//3
tipoNome.push("eduardo");//4
tipoNome.push("fabiana");//5
tipoNome.push("guilherme");//6
tipoNome.push("hercules");//7
tipoNome.push("igor");//8
tipoNome.push("jessica");//9
tipoNome.push("larissa");//10
tipoNome.push("moises");//11
tipoNome.push("nayara");//12
tipoNome.push("osvaldo");//13
tipoNome.push("paola");//14
tipoNome.push("rafael");//15
tipoNome.push("sarah");//16
tipoNome.push("tatiane");//17
tipoNome.push("ulysses");//18
tipoNome.push("vagner");//19
tipoNome.push("xavier");//20
tipoNome.push("zuleide");//21

tipoCep.push("argentina");//0
tipoCep.push("bangladesh");//1
tipoCep.push("chile");//2
tipoCep.push("dinamarca");//3
tipoCep.push("espanha");//4
tipoCep.push("filipinas");//5
tipoCep.push("grecia");//6
tipoCep.push("hungria");//7
tipoCep.push("israel");//8
tipoCep.push("jerusalem");//9
tipoCep.push("londres");//10
tipoCep.push("manaus");//11
tipoCep.push("noruega");//12
tipoCep.push("orlando");//13
tipoCep.push("parana");//14
tipoCep.push("russia");//15
tipoCep.push("santa catarina");//16
tipoCep.push("tocantins");//17
tipoCep.push("uberlandia");//18
tipoCep.push("venezuela");//19
tipoCep.push("xangai");//20
tipoCep.push("zimbabue");//21

tipoMusica.push("airplanes");//0
tipoMusica.push("believer");//1
tipoMusica.push("cedo ou tarde");//2
tipoMusica.push("deixa a vida me levar");//3
tipoMusica.push("ela so quer paz");//4
tipoMusica.push("faint");//5
tipoMusica.push("girls like you");//6
tipoMusica.push("happier");//7
tipoMusica.push("ignorance");//8
tipoMusica.push("ja sei namorar");//9
tipoMusica.push("legends never die");//10
tipoMusica.push("me encontra");//11
tipoMusica.push("new rules");//12
tipoMusica.push("ocean eyes");//13
tipoMusica.push("pain");//14
tipoMusica.push("rockabye");//15
tipoMusica.push("stressed out");//16
tipoMusica.push("telegrama");//17
tipoMusica.push("uprising");//18
tipoMusica.push("voce por perto");//19
tipoMusica.push("xote dos milagres");//20
tipoMusica.push("zoio de lula");//21

tipoVerbo.push("acompanhar");//0
tipoVerbo.push("buscar");//1
tipoVerbo.push("confiar");//2
tipoVerbo.push("defecar");//3
tipoVerbo.push("enforcar");//4
tipoVerbo.push("falsificar");//5
tipoVerbo.push("guardar");//6
tipoVerbo.push("honrar");//7
tipoVerbo.push("ir");//8
tipoVerbo.push("julgar");//9
tipoVerbo.push("levantar");//10
tipoVerbo.push("medir");//11
tipoVerbo.push("negar");//12
tipoVerbo.push("obrigar");//13
tipoVerbo.push("pagar");//14
tipoVerbo.push("roubar");//15
tipoVerbo.push("subir");//16
tipoVerbo.push("tomar");//17
tipoVerbo.push("usar");//18
tipoVerbo.push("vestir");//19
tipoVerbo.push("xingar");//20
tipoVerbo.push("zombar");//21

tipoMse.push("agradavel");//0
tipoMse.push("bonita");//1
tipoMse.push("corajosa");//2
tipoMse.push("divertida");//3
tipoMse.push("esperta");//4
tipoMse.push("feliz");//5
tipoMse.push("gentil");//6
tipoMse.push("humilde");//7
tipoMse.push("inteligente");//8
tipoMse.push("justa");//9
tipoMse.push("linda");//10
tipoMse.push("meiga");//11
tipoMse.push("nobre");//12
tipoMse.push("otimista");//13
tipoMse.push("positiva");//14
tipoMse.push("risonha");//15
tipoMse.push("simpatica");//16
tipoMse.push("trabalhadora");//17
tipoMse.push("unica");//18
tipoMse.push("virtuosa");//19
tipoMse.push("xexelenta");//20
tipoMse.push("zelosa");//21

tipoBanda.push("a day to remember");//0
tipoBanda.push("bring me the horizon");//1
tipoBanda.push("chimarruts");//2
tipoBanda.push("detonautas");//3
tipoBanda.push("eminem");//4
tipoBanda.push("fresno");//5
tipoBanda.push("green day");//6
tipoBanda.push("hungria hiphop");//7
tipoBanda.push("imagine dragons");//8
tipoBanda.push("jota quest");//9
tipoBanda.push("linkin park");//10
tipoBanda.push("maneva");//11
tipoBanda.push("nirvana");//12
tipoBanda.push("outkast");//13
tipoBanda.push("projota");//14
tipoBanda.push("red hot");//15
tipoBanda.push("system of a down");//16
tipoBanda.push("three days grace");//17
tipoBanda.push("ultraje a rigor");//18
tipoBanda.push("vanessa da mata");//19
tipoBanda.push("xxxtentacion");//20
tipoBanda.push("zedd");//21

tipoFnd[22] = "fnd";
tipoCor[22] = "cor";
tipoObjeto[22] = "objeto";
tipoAnimal[22] = "animal";
tipoComida[22] = "comida";
tipoPch[22] = "pch";
tipoNome[22] = "nome";
tipoCep[22] = "cep";
tipoMusica[22] = "musica";
tipoVerbo[22] = "verbo";
tipoMse[22] = "mse";
tipoBanda[22] = "banda";

arrays.push(tipoFnd);
arrays.push(tipoCor);
arrays.push(tipoObjeto);
arrays.push(tipoAnimal);
arrays.push(tipoComida);
arrays.push(tipoPch);
arrays.push(tipoNome);
arrays.push(tipoCep);
arrays.push(tipoMusica);
arrays.push(tipoVerbo);
arrays.push(tipoMse);
arrays.push(tipoBanda);


//////////////////////////////////////////
//////////////////////////////////////////


$("input").each(function(index, element){
var tipoAtual = "";
    if(index<12){
        if($(this).siblings().html().split("<").length >= 1){
            tipoAtual = $(this).siblings().html().split("<")[0];
        }else{
            tipoAtual = $(this).siblings().html();
        }
    }

    console.log(tipoAtual);

    //verifica tipo
    for(var i = 0; i<arrays.length; i++){
        if(tipoAtual.toLowerCase() == arrays[i][22]){

            console.log(tipoAtual.toLowerCase() +" "+ arrays[i][22]);

            //verifica letra do tipo
            for(var j = 0; j<arrays[i].length; j++){
                var palavra = arrays[i][j];

                //console.log("/////////INICIAL DA PALAVRA " + palavra.split("")[0]);
                if(typeof palavra != "undefined" && letra.toLowerCase() == palavra.split("")[0]){
                    console.log("/////entrou no " + arrays[i][j]);
                    $(element).closest('label').append("<input type='text' onclick='copiaTexto(this.id);' class='automatico' name='"+arrays[i][j]+"' id='"+arrays[i][j]+"' value='"+arrays[i][j]+"'>");
                }
            }
        }
    }
});

function copiaTexto(elemento) {
  var copyText = document.getElementById(elemento);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}