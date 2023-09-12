# Webdicebot.prototype.UserVaultDeposit

<!-- USAGE EXAMPLES -->
## Getting Started

Load WebDiceBot on Stake.com, PrimeDice.com or JacksClub.io with a appended Vault-Function.

* []() Use the modified Loader the same way you would with the _[Orginal Snippet](https://bot.mhqb365.com/#/get-started)_
* []() The Game-Mode will be automatically detected based on the URL-Path, make sure to inject it at the correct Page e.g
  
  _stake.com[/casino/games/dice](https://stake.com/casino/games/dice)_
  
  _stake.com[/casino/games/limbo](https://stake.com/casino/games/limbo)_

- [ ] !IMPORTANT  `This Loader and the Vault Function currently ONLY work on Stake, Prime or Jacksclub (or any of its Mirrors)`


### Installation

  ```sh
const WDB_API='https://api-bot.mhqb365.com';
const CASINO_GAME=location.host.includes('stake')?`stake-${location.href.includes('limbo')?'limbo':'dice'}`:(location.host.includes('jacksclub')?`jacksclub-${location.href.includes('blaze')?'blaze':'dice'}`:'primedice');
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
  return (location.host.includes('jacksclub')?window.eval(JSON.parse('"async function vault(amount){\\n    let response=await fetch(new URL(`https://api.jacksclub.io/graphql`),{\\n        method:\'POST\',\\n        headers:new Headers({\\n            \'Content-Type\':\'text/plain;charset=utf-8\',\\n            authorization:JSON.parse(decodeURIComponent(document.cookie.match(RegExp(\'token=([^;]+)\'))[1])).id,\\n        }),\\n        body:JSON.stringify({\\n            query:\'fragment Result on VaultResult{credit{transfer value version currency}debit{transfer value version currency}} mutation Deposit($amount:Float!,$currency:SpendableCurrency!){vault{deposit(input:{amount:$amount,currency:$currency}){...Result}}}\',\\n            variables:{\\n                amount:amount.toFixed(8),\\n                currency:document.querySelector(\'#wdbMenuCoin\').value,\\n            },\\n        }),\\n    })\\n    let result=await response.json();\\n    let balanceUpdate=typeof checkbalance==\'function\'?await checkbalance():void(0);\\n    console.log(\'%o%o %s %o\',[\'VaultDeposit\'],{[result.data.vault.deposit.credit.currency.toUpperCase()]:Number(result.data.vault.deposit.credit.transfer).toFixed(8)},[\'ⅈ\'],[Number(result.data.vault.deposit.credit.value).toFixed(8)]);\\n}"')):window.eval(JSON.parse('"async function vault(amount){\\n    let response=await fetch(new URL(`https://${location.host}/_api/graphql`),{\\n        method:\'POST\',\\n        headers:new Headers({\\n            \'Content-Type\':\'application/json;charset=utf-8\',\\n            \'x-access-token\':((name)=>`;\\\\x20${document.cookie}`.split(`;\\\\x20${name}=`).pop().split(\';\').shift())(\'session\'),\\n        }),\\n        body:JSON.stringify({\\n            operationName:\'CreateVaultDeposit\',\\n            query:\'mutation CreateVaultDeposit($currency:CurrencyEnum!,$amount:Float!){createVaultDeposit(currency:$currency,amount:$amount){id amount currency user{id balances{available{amount currency}vault{amount currency}}}}}\',\\n            variables:{\\n                currency:document.querySelector(\'#wdbMenuCoin\').value.toLowerCase(),\\n                amount:Math.floor(amount*1e8)/1e8,\\n            },\\n        }),\\n    });\\n    let result=await response.json();\\n    let balanceUpdate=typeof checkbalance===\'function\'?await checkbalance():void(0);\\n    console.log(\'%o%o %s %o\',[\'UserVaultDeposit\'],{[result.data.createVaultDeposit.currency.toUpperCase()]:result.data.createVaultDeposit.amount.toFixed(8)},[\'ⅈ\'],[result.data.createVaultDeposit.user.balances.find((v)=>(v).vault.currency==result.data.createVaultDeposit.currency).vault.amount.toFixed(8)]);\\n}"')));
}());
  ```

## Usage

* []() Lua & Javascript
  ```sh
  vault(amount)
  ```


## Help & Info

[@rain3t](https://t.me/rain3t)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
