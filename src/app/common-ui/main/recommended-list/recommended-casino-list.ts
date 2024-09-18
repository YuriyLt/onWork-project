export interface Casino {
    logo: string;
    name: string; 
    rating: number;
    starRating: string; 
    desc: string;
}

export const casinoes: Casino[] = [
    { logo: "../../../../assets/RoySpins.svg", name: 'Royspins', rating: 9/10, starRating: '../../../../assets/rating.svg', desc: '"Revolutionary transparency for the players"' },
    { logo: "../../../../assets/BIA.svg", name:'BetitAll', rating:8.9/10, starRating: '../../../../assets/rating.svg', desc:'"Revolutionary transparency for the players"'},
    { logo: "../../../../assets/pledoo.svg", name:'Pledoo', rating:9/10, starRating:'../../../../assets/rating.svg', desc:'"Revolutionary transparency for the players"'},
    { logo: "../../../../assets/Wazbee.svg", name:'Wazbee', rating:9.2/10, starRating:'../../../../assets/rating.svg', desc:'"Revolutionary transparency for the players"'},
]