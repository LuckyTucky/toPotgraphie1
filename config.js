var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibHVjcHJldm9zdCIsImEiOiJja2t1OTIza3AxamU0Mm9tcm9iNXQ0NWJuIn0.iszJLGn1xqTrKb-DmLiu1A',
    showMarkers: true,
    markerColor: '#F42300',
    theme: 'light',
    use3dTerrain: false,
    title: 'toPotgraphie du cannabis',
    subtitle: 'Une mise en récit de la naissance de l’industrie québécoise du cannabis',
    byline: 'Une création de Luc Prévost',
    footer: 'toPot : Le média sur la science, l’industrie et la consommation du cannabis dans toute la francophonie.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'toPotgraphie du cannabis',
            image: './images/LOGO toPot sans fond.png',
            description: 'Le chanvre fait partie du territoire québécois depuis Jacques Cartier. Sa culture, sous toutes ses formes, est une libération qui enracine. L’industrie québécoise légale du cannabis occupe le territoire depuis 2014. J’ai pensé qu’un voyage dans le temps et l’espace serait une forme de reconnaissance du travail déjà accompli. Dans l’ordre de l’attribution des licences, la carte recense les initiatives d’entreprise québécoises qui façonnent l’avenir du cannabis au Québec. ',
            location: {
						                center: { lon: -74.36140, lat: 51.22428 },
					zoom: 4.86,
					pitch: 51.00,
					bearing: -12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'stop1',
            alignment: 'right',
            hidden: false,
            title: '2014.03.14',
            image: './images/logoHexo.png',
            description: 'Le premier producteur autorisé de l’histoire du Québec... n’est plus au Québec. Une histoire d’assurance.<BR> <b>LICENCES:</b><BR> Vente (fins médicales) / Transformation / Culture<BR> <b>VENTE PRO:</b><BR> Plantes / Graines Séché / Frais Extraits Comestible Topique<BR> <b>VENTE PATIENTS:</b><BR> Plantes / Graines Séché / Frais Extraits Comestible Topique',
            location: {
                center: { lon: -75.70958, lat: 45.46040 },
zoom: 11.93,
pitch: 44.50,
bearing: 12.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop2',
            alignment: 'right',
            hidden: false,
            title: '2017.12.21',
            image: './images/9861203 Canada Inc LOGO.png',
            description: '<b>LICENCES:</b><BR> Transformation / Culture<BR> <b>VENTE PRO:</b><BR> Plantes / Grainese<BR> <b>VENTE PATIENTS:</b><BR> Aucune',
            location: {
                center: { lon: -72.29201, lat: 45.87369 },
zoom: 11.61,
pitch: 60.00,
bearing: -51.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stop3',
            alignment: 'right',
            hidden: false,
            title: '2017.12.21',
            image: './images/logo Agri-Médic.png',
            description: '<i>Sociétés de portefeuille</i><BR><b>LICENCES:</b><BR> Vente (fins médicales) / Culture<BR> <b>VENTE PRO:</b><BR> Plantes / Graines <BR> <b>VENTE PATIENTS:</b><BR> Aucune',
            location: {
                center: { lon: -74.12648, lat: 45.73287 },
zoom: 11.81,
pitch: 43.00,
bearing: 7.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }


        
    ]
};
