/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav-menu')

/*------------ REMOVER MENU MOBILE-------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    /*Quando um link for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

/*------------BOX SHADOW NO HEADER-------------*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header');
    // Quando o scroll tiver um altura maior que 200 será adiconado a class scroll-header na tag Header
    if(this.scrollY >= 200) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*------------SHOW SCROLL TOP------------- */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // Quando o scroll tiver um altura maior que 560 será adiconado a class scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)


// Array para armazenar os itens do cardápio
var menuItems = [
    { id: 1, imagem:'https://st2.depositphotos.com/1373322/9068/i/450/depositphotos_90682264-stock-photo-chicken-parmigiana-and-pasta-with.jpg', name: 'PARMEGIANNA DE CARNE - Acompanhamentos: Espaguete ao Sugo e Purê', price: 45.00 },
    { id: 2, imagem:'https://www.receiteria.com.br/wp-content/uploads/file-de-frango-parmegiana.jpeg', name: 'PARMEGIANNA DE FRANGO - Acompanhamentos: Arroz Branco e Fritas', price: 35.00 },
    { id: 3, imagem:'https://media-cdn.tripadvisor.com/media/photo-s/1b/42/b4/8e/cupim-assado-ao-molho.jpg', name: 'CUPIM AO MOLHO MADEIRA - Arroz de Alho Dourado e Batata Rústica', price: 60.00 },
    { id: 4, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0E4Ja9mlT16Do98IXQcIPqFIKubdSPe_lg&usqp=CAU', name: 'MOQUECA DE PEIXE - Acompanhamentos: Arroz Branco, Pirão, Farofa', price: 76.00 },
    { id: 5, imagem:'https://i0.statig.com.br/bancodeimagens/17/fa/vl/17favlaz0wpv3egsofr1cdjtx.jpg', name: 'CARNE DE SOL GRELHADA E QUEIJO COALHO - Acompanhamentos: Baião de Dois, Macaxeira Frita', price: 68.00 },
    { id: 6, imagem:'https://riomarfortalezaonline.com.br/fortalezashopping/2020/04/Til%C3%A1pia-a-Belle-Meuni%C3%A8re-%E2%80%93-450g.jpg', name: 'TILÁPIA GRELHADA A BELLE MEUNIERE - Acompanhamentos: Arroz Branco, Purê de Batata e Brócolis', price: 85.00 },
    { id: 7, imagem:'https://cdn.minhareceita.com.br/2021/10/76.-PRIME-RIB-COM-BATATAS-CORADAS-E-MOLHO-DE-FRAMBOESA_13-1.jpg', name: 'PRIME RIBS SUINO GRELHADO - Acompanhamentos: Arroz Branco, Purê de Macaxeira e Couve', price: 56.00 },
    { id: 8, imagem:'https://www.receitas-sem-fronteiras.com/cache/slideshow/3c/86/e7/06/thinkstockphotos-624681754.jpg/2cb6823c975ee09b0d93e071c71c86d5.jpg', name: 'ESPAGUETE DE CAMARÃO E TOMATES FRESCOS', price: 25.00 },
    { id: 9, imagem:'https://www.rampinelli.com.br//uploads/receita/1494940352receitas16052017.jpg?w=800&h=700', name: 'RISOTO DE CARNE E COGUMELOS', price: 25.00 }
];

// Referências aos elementos do HTML
var menuItemsContainer = document.getElementById('menu-items');
var selectedItemsContainer = document.getElementById('selected-items');

// Função para exibir os itens do cardápio
function displayMenuItems() {
    for (var i = 0; i < menuItems.length; i++) {
        var menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <input type="checkbox" id="item-${menuItems[i].id}" name="items" value="${menuItems[i].id}">
            <label for="item-${menuItems[i].id}">${menuItems[i].name} - R$ ${menuItems[i].price.toFixed(2)}</label>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    }
}

// Função para adicionar um item selecionado
function addSelectedItem() {
    var checkboxes = document.getElementsByName('items');
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        if (checkbox.checked) {
            var menuItem = menuItems.find(item => item.id === parseInt(checkbox.value));
            var selectedItemElement = document.createElement('div');
            selectedItemElement.setAttribute('id', `selected-item-${menuItem.id}`);
            selectedItemElement.innerHTML = `
            <img src="${menuItems[i].imagem}" alt="${menuItems[i].name}" width="100">
            <h3>${menuItems[i].name}</h3>
            <p>Preço: R$ ${menuItems[i].price.toFixed(2)}</p>
            <button type="button" onclick="removeSelectedItem(${menuItem.id})">Remover</button>
            `;
            selectedItemsContainer.appendChild(selectedItemElement);
        }
    }
}

// Função para remover um item selecionado
function removeSelectedItem(itemId) {
    var selectedItemElement = document.getElementById(`selected-item-${itemId}`);
    if (selectedItemElement) {
        selectedItemElement.remove();
    }
}

// Exibir os itens do cardápio
displayMenuItems();