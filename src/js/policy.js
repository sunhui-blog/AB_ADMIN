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
                    dataALL.push({type:policy,beta:ups,start:st,end:data_odd[oddkey]})
                }
            }
            
            $('#table').bootstrapTable({
                data:dataALL
            })
        });

/*    $.get("http://127.0.0.1:8080/action=policygroup_get&policygroupid=2",
        function (data) {
            console.log("***********");
            console.log(data);
        });*/
});
