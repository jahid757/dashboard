import { icons } from "../assets/icons/icon";

const cryptoData = [
    {
        id:1,
        name:'Agora',
        status:'upcoming',
        image:icons.agora,
        network_image:icons.parent_etn_network,
        crypto_network: 'ETH',
        crypto_value: '50',
        crypto_value_network: 'AGO',
        sale_status:'presale',
        value_min:'50',
        value_max:'200',
        progress:25,
        liquidity:'60',
        lockup_time:'30 Days',
        stacking_poll:false,
        // month/day/year
        end_date:'5/2/2023',
        type:'Soft/Hard',
        love:false,
        
    },
    {
        id:2,
        name:'EverEarn DAO',
        status:'upcoming',
        image:icons.ever_earn,
        network_image:icons.ethereum,
        crypto_network: 'USDC',
        crypto_value:  '302,089.9',
        crypto_value_network: 'EVN',
        sale_status:'presale',
        value_min:'500,000',
        value_max:'1,000,000',
        progress:45,
        liquidity:60,
        lockup_time:'180 Days',
        stacking_poll:true,
        // month/day/year
        end_date:'7/2/2023',
        type:'Soft/Hard',
        love:true,
        verify:[
            {name:'KYC'},
            {name:'audit'},
            {name:'DD'}
    ]
    },
    {
        id:3,
        name:'EverEarn DAO',
        status:'upcoming',
        image:icons.ever_earn,
        network_image:icons.ethereum,
        crypto_network: 'USDC',
        crypto_value:  '302,089.9',
        crypto_value_network: 'EVN',
        sale_status:'presale',
        value_min:'500,000',
        value_max:'1,000,000',
        progress:0,
        liquidity:60,
        lockup_time:'180 Days',
        stacking_poll:false,
        // month/day/year
        end_date:'6/2/2023',
        type:'Soft',
        love:true,
        verify:[]
    },
    {
        id:4,
        name:'EverEarn DAO',
        status:'live',
        image:icons.ever_earn,
        network_image:icons.ethereum,
        crypto_network: 'USDC',
        crypto_value:  '302,089.9',
        crypto_value_network: 'EVN',
        sale_status:'presale',
        value_min:'500,000',
        value_max:'1,000,000',
        progress:75,
        liquidity:60,
        lockup_time:'180 Days',
        stacking_poll:false,
        // month/day/year
        end_date:'7/2/2023',
        type:'Soft/Hard',
        love:true,
        verify:[
            {name:'KYC'},
            {name:'audit'},
            {name:'DD'}
    ]
    },
    {
        id:5,
        name:'EverEarn DAO',
        status:'ended',
        image:icons.ever_earn,
        network_image:icons.ethereum,
        crypto_network: 'USDC',
        crypto_value:  '302,089.9',
        crypto_value_network: 'EVN',
        sale_status:'presale',
        value_min:'500,000',
        value_max:'1,000,000',
        progress:0,
        liquidity:60,
        lockup_time:'180 Days',
        stacking_poll:false,
        // month/day/year
        end_date:'7/2/2023',
        type:'Soft/Hard',
        love:false,
        verify:[]
    },
    {
        id:6,
        name:'EverEarn DAO',
        status:'canceled',
        image:icons.ever_earn,
        network_image:icons.ethereum,
        crypto_network: 'USDC',
        crypto_value:  '302,089.9',
        crypto_value_network: 'EVN',
        sale_status:'presale',
        value_min:'500,000',
        value_max:'1,000,000',
        progress:0,
        liquidity:60,
        lockup_time:'180 Days',
        stacking_poll:false,
        // month/day/year
        end_date:'7/2/2023',
        type:'Soft/Hard',
        love:false,
        verify:[]
    }
];

export default cryptoData;