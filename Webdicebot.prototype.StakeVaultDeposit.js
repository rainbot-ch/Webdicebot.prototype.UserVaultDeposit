const WDB_API='https://api-bot.mhqb365.com';
const CASINO_GAME=location.host.includes('stake')?`stake-${location.href.includes('limbo')?'limbo':'dice'}`:'primedice';
(async function(){
await fetch(`${WDB_API}/stable/init`)
  .then((response)=>response.text())
  .then((txt)=>eval(txt))
  .then(async()=>{
      await new Promise((resolve)=>{
          let awaitFengari=setInterval(()=>(!!window.fengari&&!Boolean(window.fengari?.lua?.LUA_OK))&&(resolve(clearInterval(awaitFengari))),0x52);
      });
  });
  fengari.load('function vault(amount)\n js.global:vault(amount) \nend')();
  return window.eval(JSON.parse('"async function vault(amount){\\n    let response=await fetch(new URL(`https://${location.host}/_api/graphql`),{\\n        method:\'POST\',\\n        headers:new Headers({\\n            \'Content-Type\':\'application/json;charset=utf-8\',\\n            \'x-access-token\':((name)=>`; ${document.cookie}`.split(`; ${name}=`).pop().split(\';\').shift())(\'session\'),\\n        }),\\n        body:JSON.stringify({\\n            operationName:\'CreateVaultDeposit\',\\n            query:\'mutation CreateVaultDeposit($currency: CurrencyEnum!, $amount: Float!) {\\\\n  createVaultDeposit(currency: $currency, amount: $amount) {\\\\n    id\\\\n    amount\\\\n    currency\\\\n    user {\\\\n      id\\\\n      balances {\\\\n        available {\\\\n          amount\\\\n          currency\\\\n          __typename\\\\n        }\\\\n        vault {\\\\n          amount\\\\n          currency\\\\n          __typename\\\\n        }\\\\n        __typename\\\\n      }\\\\n      __typename\\\\n    }\\\\n    __typename\\\\n  }\\\\n}\\\\n\',\\n            variables:{\\n                currency:document.querySelector(\'#wdbMenuCoin\').value.toLowerCase(),\\n                amount:Math.floor(amount*1e8)/1e8,\\n            },\\n        })\\n    })\\n    if(response.ok){\\n        let result=await response.json();\\n        let balanceUpdate=await checkbalance();\\n        console.log([\'UserVaultDeposit\'],{[result.data.createVaultDeposit.currency.toUpperCase()]:result.data.createVaultDeposit.amount.toFixed(8)});\\n    }\\n}"'));
}());
