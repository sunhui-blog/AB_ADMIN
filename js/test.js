/**
 * Created by sunhui on 16/6/18.
 */
$(function(){
    var policy="";
    $.get("http://127.0.0.1:8080/ab_admin?action=policy_get&policyid=9",
        function(data){
            var dataALL=[];
            var a=data.data.divdata;
            var data_even=[];
            var data_odd=[];
            policy=data.data.divtype;
            for(var i in a){
                if(i.split(":")[0]%2 == 0){
                    data_even[i]=a[i]
                }else{
                    data_odd[i] = a[i];
                }
            }
            for(var j in data_even){
                var id = j.split(":")[0];
                var ups = j.split(":")[1];
                var oddid = parseInt(id)+1;
                var oddkey = oddid+":"+ups;
                var st = data_even[j];
                if(data_odd[oddkey] != undefined){
                    console.log(data_odd[oddkey]);
                    dataALL.push({type:policy,beta:ups,start:st,end:data_odd[oddkey]})
                }
            }
            // for(var i in a){
            //     if(i.split(":")[0]%2 == 0){
            //         data_even.push(i+":"+a[i]);
            //     }else{
            //         data_odd.push(i+":"+a[i]);
            //     }
            // }
            // console.log(data_even);
            // console.log(data_odd);
            // for(var j in data_even){
            //     var beta_even=data_even[j].split(":")[1];
            //     for(var m in data_odd){
            //         var beta_odd=data_odd[m].split(":")[1];
            //
            //         if(beta_odd == beta_even){
            //             console.log(beta_even);
            //             console.log(beta_odd);
            //             console.log(data_even[j].split(":")[2]);
            //             console.log(data_odd[m].split(":")[2]);
            //             dataALL.push(
            //                 {type:policy,
            //                     beta:beta_odd,
            //                     start:data_even[j].split(":")[2],
            //                     end:data_odd[m].split(":")[2]});
            //         }
            //     }
            //
            // }

            console.log(dataALL);
            $('#table').bootstrapTable({
                data:dataALL
            })
        });

});
//{divtype:"iprange", divdata:[{range:{start:1111,end:2222},upstream:"beta1"}]},