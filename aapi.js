//URL da API
const URL_fatos ='https://catfact.ninja/fact'
const URL_fotos ='https://api.thecatapi.com/v1/images/search'
//elementos html
let $fatos_p = document.getElementById('fatos')
let $btn_pegar_fatos = document.getElementById('btn_pegar_fatos')
let $foto = document.getElementById('foto')
let $fatos_caracteres = document.querySelector('.fatos_caracteres')

    $btn_pegar_fatos.addEventListener('click', async () => { 
    $fatos_p.innerText ='Carregando...'
    $foto.src = '/icone/645430_4c75f.gif'
    
    //requisição de fatos
    let fato_response = await(fetch(URL_fatos))
    let fato_obj = await (fato_response.json())


    //requisição de fotos
    let foto_response = await(fetch(URL_fotos))  
    let foto_obj = await(foto_response.json())
    let foto_largura = foto_obj[0].width
    let foto_altura  = foto_obj[0].height  

    console.log(foto_response)
    console.log(foto_obj)
    console.log(fato_obj)
    console.log(foto_obj[0].url)
    console.log(foto_obj[0].width)
    console.log(foto_obj[0].height)

    //mostrando elementos
    $fatos_p.innerText = fato_obj.fact.trim()
    $fatos_p.innerText = "Fato: " + fato_obj.fact.trim() + "\n Numero de caracteres: " + fato_obj.length
    $foto.style.width = foto_largura
    $foto.style.height = foto_altura



    //$fatos_p.innerText = foto_obj[0].height
    //fatos_p.innerText = foto_obj[0].width  
    
    $foto.src = foto_obj[0].url
})

$btn_pegar_fatos.classList.add ("$btn_pegar_fatos")
    
    

