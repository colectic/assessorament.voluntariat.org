// setup app and pass ui.bootstrap as dep
var myApp = angular.module("assessorament", ["ui.bootstrap", "ngResource"]);

// configure
myApp.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://query.yahooapis.com/v1/public/yql**']);
});

// define factory for data source
myApp.factory("Towns", function(){
  var towns = ["Abella de la Conca", "Abrera", "Àger", "Agramunt", "Aguilar de Segarra", "Agullana", "Aiguafreda", "Aiguamúrcia", "Aiguaviva", "Aitona", "els Alamús", "Alàs i Cerc", "l'Albagés", "Albanyà", "Albatàrrec", "Albesa", "l'Albi", "Albinyana", "l'Albiol", "Albons", "Alcanar", "Alcanó", "Alcarràs", "Alcoletge", "Alcover", "l'Aldea", "Aldover", "l'Aleixar", "Alella", "Alfara de Carles", "Alfarràs", "Alfés", "Alforja", "Algerri", "Alguaire", "Alins", "Alió", "Almacelles", "Almatret", "Almenar", "Almoster", "Alòs de Balaguer", "Alp", "Alpens", "Alpicat", "Alt Àneu", "Altafulla", "Amer", "l'Ametlla de Mar", "l'Ametlla del Vallès", "l'Ampolla", "Amposta", "Anglès", "Anglesola", "Arbeca", "l'Arboç", "Arbolí", "Arbúcies", "Arenys de Mar", "Arenys de Munt", "Argelaguer", "Argençola", "l'Argentera", "Argentona", "l'Armentera", "Arnes", "Arres", "Arsèguel", "Artés", "Artesa de Lleida", "Artesa de Segre", "Ascó", "Aspa", "les Avellanes i Santa Linya", "Avià", "Avinyó", "Avinyonet de Puigventós", "Avinyonet del Penedès", "Badalona", "Badia del Vallès", "Bagà", "Baix Pallars", "Balaguer", "Balenyà", "Balsareny", "Banyeres del Penedès", "Banyoles", "Barbens", "Barberà de la Conca", "Barberà del Vallès", "Barcelona", "la Baronia de Rialb", "Bàscara", "Bassella", "Batea", "Bausen", "Begues", "Begur", "Belianes", "Bellaguarda", "Bellcaire d'Empordà", "Bellcaire d'Urgell", "Bell-lloc d'Urgell", "Bellmunt del Priorat", "Bellmunt d'Urgell", "Bellprat", "Bellpuig", "Bellvei", "Bellver de Cerdanya", "Bellvís", "Benavent de Segrià", "Benifallet", "Benissanet", "Berga", "Besalú", "Bescanó", "Beuda", "Bigues i Riells", "Biosca", "la Bisbal de Falset", "la Bisbal del Penedès", "la Bisbal d'Empordà", "Biure", "Blancafort", "Blanes", "Boadella i les Escaules", "Bolvir", "Bonastre", "es Bòrdes", "Bordils", "les Borges Blanques", "les Borges del Camp", "Borrassà", "Borredà", "Bossòst", "Bot", "Botarell", "Bovera", "Bràfim", "Breda", "el Bruc", "el Brull", "Brunyola", "Cabacés", "Cabanabona", "Cabanelles", "Cabanes", "les Cabanyes", "Cabó", "Cabra del Camp", "Cabrera d'Anoia", "Cabrera de Mar", "Cabrils", "Cadaqués", "Calaf", "Calafell", "Calders", "Caldes de Malavella", "Caldes de Montbui", "Caldes d'Estrac", "Calella", "Calldetenes", "Callús", "Calonge", "Calonge de Segarra", "Camarasa", "Camarles", "Cambrils", "Camós", "Campdevànol", "Campelles", "Campins", "Campllong", "Camprodon", "Canejan", "Canet d'Adri", "Canet de Mar", "la Canonja", "Canovelles", "Cànoves i Samalús", "Cantallops", "Canyelles", "Capafonts", "Capçanes", "Capellades", "Capmany", "Capolat", "Cardedeu", "Cardona", "Carme", "Caseres", "Cassà de la Selva", "Casserres", "Castell de l'Areny", "Castell de Mur", "Castellar de la Ribera", "Castellar de n'Hug", "Castellar del Riu", "Castellar del Vallès", "Castellbell i el Vilar", "Castellbisbal", "Castellcir", "Castelldans", "Castelldefels", "Castellet i la Gornal", "Castellfollit de la Roca", "Castellfollit de Riubregós", "Castellfollit del Boix", "Castellgalí", "Castellnou de Bages", "Castellnou de Seana", "Castelló de Farfanya", "Castelló d'Empúries", "Castellolí", "Castell-Platja d'Aro", "Castellserà", "Castellterçol", "Castellvell del Camp", "Castellví de la Marca", "Castellví de Rosanes", "el Catllar", "Cava", "la Cellera de Ter", "Celrà", "Centelles", "Cercs", "Cerdanyola del Vallès", "Cervelló", "Cervera", "Cervià de les Garrigues", "Cervià de Ter", "Cistella", "Ciutadilla", "Clariana de Cardener", "el Cogul", "Colera", "Coll de Nargó", "Collbató", "Colldejou", "Collsuspina", "Colomers", "la Coma i la Pedra", "Conca de Dalt", "Conesa", "Constantí", "Copons", "Corbera de Llobregat", "Corbera d'Ebre", "Corbins", "Corçà", "Cornellà de Llobregat", "Cornellà del Terri", "Cornudella de Montsant", "Creixell", "Crespià", "Cruïlles, Monells i Sant Sadurní de l'Heura", "Cubelles", "Cubells", "Cunit", "Darnius", "Das", "Deltebre", "Dosrius", "Duesaigües", "l'Escala", "Esparreguera", "Espinelves", "l'Espluga Calba", "l'Espluga de Francolí", "Esplugues de Llobregat", "Espolla", "Esponellà", "Espot", "l'Espunyola", "L'Esquirol", "Estamariu", "l'Estany", "Estaràs", "Esterri d'Àneu", "Esterri de Cardós", "Falset", "el Far d'Empordà", "Farrera", "la Fatarella", "la Febró", "Figaró-Montmany", "Fígols", "Fígols i Alinyà", "la Figuera", "Figueres", "Figuerola del Camp", "Flaçà", "Flix", "la Floresta", "Fogars de la Selva", "Fogars de Montclús", "Foixà", "Folgueroles", "Fondarella", "Fonollosa", "Fontanals de Cerdanya", "Fontanilles", "Fontcoberta", "Font-rubí", "Foradada", "Forallac", "Forès", "Fornells de la Selva", "Fortià", "les Franqueses del Vallès", "Freginals", "la Fuliola", "Fulleda", "Gaià", "la Galera", "Gallifa", "Gandesa", "Garcia", "els Garidells", "la Garriga", "Garrigàs", "Garrigoles", "Garriguella", "Gavà", "Gavet de la Conca", "Gelida", "Ger", "Gimenells i el Pla de la Font", "Ginestar", "Girona", "Gironella", "Gisclareny", "Godall", "Golmés", "Gombrèn", "Gósol", "la Granada", "la Granadella", "Granera", "la Granja d'Escarp", "Granollers", "Granyanella", "Granyena de les Garrigues", "Granyena de Segarra", "Gratallops", "Gualba", "Gualta", "Guardiola de Berguedà", "els Guiamets", "Guils de Cerdanya", "Guimerà", "la Guingueta d'Àneu", "Guissona", "Guixers", "Gurb", "Horta de Sant Joan", "l'Hospitalet de Llobregat", "els Hostalets de Pierola", "Hostalric", "Igualada", "Isona i Conca Dellà", "Isòvol", "Ivars de Noguera", "Ivars d'Urgell", "Ivorra", "Jafre", "la Jonquera", "Jorba", "Josa i Tuixén", "Juià", "Juncosa", "Juneda", "Les", "Linyola", "la Llacuna", "Lladó", "Lladorre", "Lladurs", "la Llagosta", "Llagostera", "Llambilles", "Llanars", "Llançà", "Llardecans", "Llavorsí", "Lleida", "Llers", "Lles de Cerdanya", "Lliçà d'Amunt", "Lliçà de Vall", "Llimiana", "Llinars del Vallès", "Llívia", "el Lloar", "Llobera", "Llorac", "Llorenç del Penedès", "Lloret de Mar", "les Llosses", "Lluçà", "Maçanet de Cabrenys", "Maçanet de la Selva", "Madremanya", "Maià de Montcal", "Maials", "Maldà", "Malgrat de Mar", "Malla", "Manlleu", "Manresa", "Marçà", "Margalef", "Marganell", "Martorell", "Martorelles", "Mas de Barberans", "Masarac", "Masdenverge", "les Masies de Roda", "les Masies de Voltregà", "Masllorenç", "el Masnou", "la Masó", "Maspujols", "Masquefa", "el Masroig", "Massalcoreig", "Massanes", "Massoteres", "Matadepera", "Mataró", "Medinyà", "Mediona", "Menàrguens", "Meranges", "Mieres", "el Milà", "Miralcamp", "Miravet", "Moià", "el Molar", "Molins de Rei", "Mollerussa", "Mollet de Peralada", "Mollet del Vallès", "Molló", "la Molsosa", "Monistrol de Calders", "Monistrol de Montserrat", "Montagut i Oix", "Montblanc", "Montbrió del Camp", "Montcada i Reixac", "Montclar", "Montellà i Martinet", "Montesquiu", "Montferrer i Castellbò", "Montferri", "Montgai", "Montgat", "Montmajor", "Montmaneu", "el Montmell", "Montmeló", "Montoliu de Lleida", "Montoliu de Segarra", "Montornès de Segarra", "Montornès del Vallès", "Mont-ral", "Mont-ras", "Mont-roig del Camp", "Montseny", "Móra d'Ebre", "Móra la Nova", "el Morell", "la Morera de Montsant", "Muntanyola", "Mura", "Nalec", "Naut Aran", "Navarcles", "Navàs", "Navata", "Navès", "la Nou de Berguedà", "la Nou de Gaià", "Nulles", "Odèn", "Òdena", "Ogassa", "Olèrdola", "Olesa de Bonesvalls", "Olesa de Montserrat", "Oliana", "Oliola", "Olius", "Olivella", "Olost", "Olot", "les Oluges", "Olvan", "els Omellons", "els Omells de na Gaia", "Ordis", "Organyà", "Orís", "Oristà", "Orpí", "Òrrius", "Os de Balaguer", "Osor", "Ossó de Sió", "Pacs del Penedès", "Palafolls", "Palafrugell", "Palamós", "el Palau d'Anglesola", "Palau de Santa Eulàlia", "Palau-sator", "Palau-saverdera", "Palau-solità i Plegamans", "els Pallaresos", "Pallejà", "la Palma de Cervelló", "la Palma d'Ebre", "Palol de Revardit", "Pals", "el Papiol", "Pardines", "Parets del Vallès", "Parlavà", "Passanant i Belltall", "Pau", "Paüls", "Pedret i Marzà", "Penelles", "la Pera", "Perafita", "Perafort", "Peralada", "Peramola", "el Perelló", "Piera", "les Piles", "Pineda de Mar", "el Pinell de Brai", "Pinell de Solsonès", "Pinós", "Pira", "el Pla de Santa Maria", "el Pla del Penedès", "les Planes d'Hostoles", "Planoles", "els Plans de Sió", "el Poal", "la Pobla de Cérvoles", "la Pobla de Claramunt", "la Pobla de Lillet", "la Pobla de Mafumet", "la Pobla de Massaluca", "la Pobla de Montornès", "la Pobla de Segur", "Poboleda", "Polinyà", "el Pont d'Armentera", "el Pont de Bar", "Pont de Molins", "el Pont de Suert", "el Pont de Vilomara i Rocafort", "Pontils", "Pontons", "Pontós", "Ponts", "Porqueres", "Porrera", "el Port de la Selva", "Portbou", "la Portella", "Pradell de la Teixeta", "Prades", "Prat de Comte", "el Prat de Llobregat", "Pratdip", "Prats de Lluçanès", "els Prats de Rei", "Prats i Sansor", "Preixana", "Preixens", "Premià de Dalt", "Premià de Mar", "les Preses", "Prullans", "Puigcerdà", "Puigdàlber", "Puiggròs", "Puigpelat", "Puig-reig", "Puigverd d'Agramunt", "Puigverd de Lleida", "Pujalt", "la Quar", "Quart", "Queralbs", "Querol", "Rabós", "Rajadell", "Rasquera", "Regencós", "Rellinars", "Renau", "Reus", "Rialp", "la Riba", "Riba-roja d'Ebre", "Ribera d'Ondara", "Ribera d'Urgellet", "Ribes de Freser", "Riells i Viabrea", "la Riera de Gaià", "Riner", "Ripoll", "Ripollet", "Riu de Cerdanya", "Riudarenes", "Riudaura", "Riudecanyes", "Riudecols", "Riudellots de la Selva", "Riudoms", "Riumors", "la Roca del Vallès", "Rocafort de Queralt", "Roda de Berà", "Roda de Ter", "Rodonyà", "Roquetes", "Roses", "Rosselló", "el Rourell", "Rubí", "Rubió", "Rupià", "Rupit i Pruit", "Sabadell", "Sagàs", "Salàs de Pallars", "Saldes", "Sales de Llierca", "Sallent", "Salomó", "Salou", "Salt", "Sanaüja", "Sant Adrià de Besòs", "Sant Agustí de Lluçanès", "Sant Andreu de la Barca", "Sant Andreu de Llavaneres", "Sant Andreu Salou", "Sant Aniol de Finestres", "Sant Antoni de Vilamajor", "Sant Bartomeu del Grau", "Sant Boi de Llobregat", "Sant Boi de Lluçanès", "Sant Carles de la Ràpita", "Sant Cebrià de Vallalta", "Sant Celoni", "Sant Climent de Llobregat", "Sant Climent Sescebes", "Sant Cugat del Vallès", "Sant Cugat Sesgarrigues", "Sant Esteve de la Sarga", "Sant Esteve de Palautordera", "Sant Esteve Sesrovires", "Sant Feliu de Buixalleu", "Sant Feliu de Codines", "Sant Feliu de Guíxols", "Sant Feliu de Llobregat", "Sant Feliu de Pallerols", "Sant Feliu Sasserra", "Sant Ferriol", "Sant Fost de Campsentelles", "Sant Fruitós de Bages", "Sant Gregori", "Sant Guim de Freixenet", "Sant Guim de la Plana", "Sant Hilari Sacalm", "Sant Hipòlit de Voltregà", "Sant Iscle de Vallalta", "Sant Jaume de Frontanyà", "Sant Jaume de Llierca", "Sant Jaume dels Domenys", "Sant Jaume d'Enveja", "Sant Joan de les Abadesses", "Sant Joan de Mollet", "Sant Joan de Vilatorrada", "Sant Joan Despí", "Sant Joan les Fonts", "Sant Jordi Desvalls", "Sant Julià de Cerdanyola", "Sant Julià de Ramis", "Sant Julià de Vilatorta", "Sant Julià del Llor i Bonmatí", "Sant Just Desvern", "Sant Llorenç de la Muga", "Sant Llorenç de Morunys", "Sant Llorenç d'Hortons", "Sant Llorenç Savall", "Sant Martí d'Albars", "Sant Martí de Centelles", "Sant Martí de Llémena", "Sant Martí de Riucorb", "Sant Martí de Tous", "Sant Martí Sarroca", "Sant Martí Sesgueioles", "Sant Martí Vell", "Sant Mateu de Bages", "Sant Miquel de Campmajor", "Sant Miquel de Fluvià", "Sant Mori", "Sant Pau de Segúries", "Sant Pere de Ribes", "Sant Pere de Riudebitlles", "Sant Pere de Torelló", "Sant Pere de Vilamajor", "Sant Pere Pescador", "Sant Pere Sallavinera", "Sant Pol de Mar", "Sant Quintí de Mediona", "Sant Quirze de Besora", "Sant Quirze del Vallès", "Sant Quirze Safaja", "Sant Ramon", "Sant Sadurní d'Anoia", "Sant Sadurní d'Osormort", "Sant Salvador de Guardiola", "Sant Vicenç de Castellet", "Sant Vicenç de Montalt", "Sant Vicenç de Torelló", "Sant Vicenç dels Horts", "Santa Bàrbara", "Santa Cecília de Voltregà", "Santa Coloma de Cervelló", "Santa Coloma de Farners", "Santa Coloma de Gramenet", "Santa Coloma de Queralt", "Santa Cristina d'Aro", "Santa Eugènia de Berga", "Santa Eulàlia de Riuprimer", "Santa Eulàlia de Ronçana", "Santa Fe del Penedès", "Santa Llogaia d'Àlguema", "Santa Margarida de Montbui", "Santa Margarida i els Monjos", "Santa Maria de Besora", "Santa Maria de Corcó", "Santa Maria de Martorelles", "Santa Maria de Merlès", "Santa Maria de Miralles", "Santa Maria de Palautordera", "Santa Maria d'Oló", "Santa Oliva", "Santa Pau", "Santa Perpètua de Mogoda", "Santa Susanna", "Santpedor", "Sarral", "Sarrià de Ter", "Sarroca de Bellera", "Sarroca de Lleida", "Saus, Camallera i Llampaies", "Savallà del Comtat", "la Secuita", "la Selva de Mar", "la Selva del Camp", "Senan", "la Sénia", "Senterada", "la Sentiu de Sió", "Sentmenat", "Serinyà", "Seròs", "Serra de Daró", "Setcases", "la Seu d'Urgell", "Seva", "Sidamon", "Sils", "Sitges", "Siurana", "Sobremunt", "el Soleràs", "Solivella", "Solsona", "Sora", "Soriguera", "Sort", "Soses", "Subirats", "Sudanell", "Sunyer", "Súria", "Susqueda", "Tagamanent", "Talamanca", "Talarn", "Talavera", "la Tallada d'Empordà", "Taradell", "Tarragona", "Tàrrega", "Tarrés", "Tarroja de Segarra", "Tavèrnoles", "Tavertet", "Teià", "Térmens", "Terrades", "Terrassa", "Tiana", "Tírvia", "Tiurana", "Tivenys", "Tivissa", "Tona", "Torà", "Tordera", "Torelló", "els Torms", "Tornabous", "la Torre de Cabdella", "la Torre de Claramunt", "la Torre de Fontaubella", "la Torre de l'Espanyol", "Torrebesses", "Torredembarra", "Torrefarrera", "Torrefeta i Florejacs", "Torregrossa", "Torrelameu", "Torrelavit", "Torrelles de Foix", "Torrelles de Llobregat", "Torrent", "Torres de Segre", "Torre-serona", "Torroella de Fluvià", "Torroella de Montgrí", "Torroja del Priorat", "Tortellà", "Tortosa", "Toses", "Tossa de Mar", "Tremp", "Ullà", "Ullastrell", "Ullastret", "Ulldecona", "Ulldemolins", "Ultramort", "Urús", "Vacarisses", "la Vajol", "la Vall de Bianya", "la Vall de Boí", "Vall de Cardós", "la Vall d'en Bas", "Vallbona d'Anoia", "Vallbona de les Monges", "Vallcebre", "Vallclara", "Vallfogona de Balaguer", "Vallfogona de Ripollès", "Vallfogona de Riucorb", "Vallgorguina", "Vallirana", "Vall-llobrega", "Vallmoll", "Vallromanes", "Valls", "les Valls d'Aguilar", "les Valls de Valira", "Vandellòs i l'Hospitalet de l'Infant", "la Vansa i Fórnols", "Veciana", "el Vendrell", "Ventalló", "Verdú", "Verges", "Vespella de Gaià", "Vic", "Vidrà", "Vidreres", "Vielha e Mijaran", "Vilabella", "Vilabertran", "Vilablareix", "Vilada", "Viladamat", "Viladasens", "Viladecans", "Viladecavalls", "Vilademuls", "Viladrau", "Vilafant", "Vilafranca del Penedès", "Vilagrassa", "Vilajuïga", "Vilalba dels Arcs", "Vilalba Sasserra", "Vilaller", "Vilallonga de Ter", "Vilallonga del Camp", "Vilamacolum", "Vilamalla", "Vilamaniscle", "Vilamòs", "Vilanant", "Vilanova de Bellpuig", "Vilanova de la Barca", "Vilanova de l'Aguda", "Vilanova de Meià", "Vilanova de Prades", "Vilanova de Sau", "Vilanova de Segrià", "Vilanova del Camí", "Vilanova del Vallès", "Vilanova d'Escornalbou", "Vilanova i la Geltrú", "Vilaplana", "Vila-rodona", "Vila-sacra", "Vila-sana", "Vila-seca", "Vilassar de Dalt", "Vilassar de Mar", "Vilaür", "Vilaverd", "la Vilella Alta", "la Vilella Baixa", "Vilobí del Penedès", "Vilobí d'Onyar", "Vilopriu", "el Vilosell", "Vimbodí i Poblet", "Vinaixa", "Vinebre", "Vinyols i els Arcs", "Viver i Serrateix", "Xerta"];
  return towns;
});
myApp.factory("Structures", function(){
  var structures = ["Associació sense ànim de lucre", "Fundació", " Cooperativa d'iniciativa social sense ànim de lucre"];
  return structures;
});
myApp.factory("Areas", function(){
  var areas = ["serveis socials", "serveis sanitaris", "famílies", "associacionisme educatiu", "oci i lleure", "cultura", "esport", "justícia global", "DDHH", "pau i cooperació ", "voluntariat internacional", "medi ambient", "igualtat de gènere i LGBT", "joventut", "gent gran", "cohesió social", "comunitari i veïnal", "moviments ateneistes", "protecció dels animals"];
  return areas;
});
myApp.factory("Hows", function(){
  var hows = ["xarxanet.org", "voluntariat.org", "butlletí A l'Abast", "presentació en el territori", "punt de voluntariat", "administració municipal", "Generalitat de Catalunya", "una altra entitat", "altres"];
  return hows;
});
myApp.factory("Feeds", function($http){
  var url = 'http://stackoverflow.com/feeds/tag?tagnames=angularjs&sort=newest';
  var feeds = $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fnews.ycombinator.com%2Frss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=callback");
  console.log('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20\'' + encodeURIComponent(url) + '\'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK');
  return feeds;
});

// define factories for REST elements
myApp.factory("CustomerCompany", function($resource){
  return $resource('http://infyotrs.xarxanet.org/public/api/v1/customer_companies/:customer_id', {customer_id:''});
});
myApp.factory("CustomerUser", function($resource){
    return $resource('http://infyotrs.xarxanet.org/public/api/v1/customer_users/:login', {login:''});
});
myApp.factory("Ticket", function($resource){
    //TODO!!!!! Treure usuari i contrassenya
    return $resource('http://otrs.xarxanet.org/Webservice/Ticket?UserLogin=xxxx&Password=xxxx');
});

// setup controller and pass data source
myApp.controller("FormCtrl", function($scope, Towns, Structures, Hows, Areas, CustomerCompany, CustomerUser, Ticket, Feeds){

  $scope.customer_company = new CustomerCompany();
  $scope.customer_user = new CustomerUser();
  $scope.ticket = new Ticket();

  // Init data
  $scope.data = {};
  $scope.step = 0;
  $scope.step_id = 'tipus';
  $scope.steps = [{puntual:'tipus', acompanyament: 'tipus'},
                  {puntual:'consulta', acompanyament: 'tipus_acompanyament'},
                  {puntual:'dades_personals', acompanyament: 'consulta'},
                  {puntual:'altres_dades', acompanyament: 'dades_personals'},
                  {puntual:'conegut', acompanyament: 'altres_dades'},
                  {puntual:'compromis', acompanyament: 'conegut'},
                  {puntual:null, acompanyament: 'compromis'}];
  $scope.towns = Towns;
  $scope.structures = Structures;
  $scope.hows = Hows;
  $scope.areas = Areas;
  console.log(Feeds);
  $scope.feeds = Feeds;
  $scope.status = '';

  $scope.setType = function(type) {
	  $scope.data.tipus = type;
	  $scope.advance();
  }

  $scope.advance = function() {
	  $scope.step_id = $scope.steps[$scope.step+1][$scope.data.tipus];
	  $scope.step++;
  }

  $scope.goBack = function() {
	  $scope.step_id = $scope.steps[$scope.step-1][$scope.data.tipus];
	  $scope.step--;
  }

  $scope.send = function() {
    //console.log($scope.customer_company);
    //console.log($scope.data);
    //console.log($scope.customer_company.$get(function(){}));
    //var name = $scope.data.altres_dades.personal_entitat == 'personal' ? $scope.data.dades_personals.nom+' '+$scope.data.dades_personals.cognom : $scope.data.altres_dades.nom_entitat;

    var date =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    /*
    //Customer company
    var customer_id = 'c';
    $scope.customer_company.$get({customer_id: customer_id}, function(data){
      console.log('success');
    }, function(error){
      console.log('error');
      $scope.customer_company.customer_id = customer_id;
      $scope.customer_company.name = 'a';
      $scope.customer_company.CIF = 'a';
      $scope.customer_company.city = 'a';
      $scope.customer_company.comarca = 'a';
      $scope.customer_company.provincia = 'a';
      $scope.customer_company.ambit_actuacio = 'a';
      $scope.customer_company.forma_juridica = 'a';
      $scope.customer_company.via_coneixement = 'a';
      $scope.customer_company.valid_id = 1;
      $scope.customer_company.create_time = date;
      $scope.customer_company.create_by = 2;
      $scope.customer_company.change_time = date;
      $scope.customer_company.change_by = 2;
      $scope.customer_company.$save();
    });
    */
    /*
    //Customer user
    var login = 'e';
    $scope.customer_user.$get({login: login}, function(data){
      console.log('success');
    }, function(error){
      console.log('error');
      $scope.customer_user.id = 0;
      $scope.customer_user.login = login;
      $scope.customer_user.email = 'a';
      $scope.customer_user.customer_id = 'a';
      $scope.customer_user.pw = 'a';
      $scope.customer_user.title = 'a';
      $scope.customer_user.first_name = 'a';
      $scope.customer_user.last_name = 'a';
      $scope.customer_user.phone = 'a';
      $scope.customer_user.mobile = 'a';
      $scope.customer_user.email_ext00 = 'a';
      $scope.customer_user.email_ext01 = 'a';
      $scope.customer_user.comments = 'a';
      $scope.customer_user.valid_id = 1;
      $scope.customer_user.create_time = date;
      $scope.customer_user.create_by = 2;
      $scope.customer_user.change_time = date;
      $scope.customer_user.change_by = 2;
      $scope.customer_user.$save();
    });
    */

    /*
    $scope.ticket.Ticket = {
      'CustomerUser' : 'felix.casanellas@elteb.org',
      'Priority' : '3 normal',
      'Queue' : 'Raw',
      'State' : 'open',
      'Title' : 'Tiquet de prova',
      'Type' : 'Unclassified'
    };
    $scope.ticket.Article = {
      'Body' : 'Cos del Tiquet',
      'ContentType' : 'text/plain; charset=utf8',
      'Subject' : 'Tiquet de prova'
    };
    $scope.ticket.$save();
    */

    $scope.status = 'send';
    $scope.step = 0;
    $scope.step_id = 'tipus';
    $scope.data = {};
  }
});
