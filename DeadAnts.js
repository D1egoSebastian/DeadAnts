const DeadAnts = function(ants){
    //verificar si ants es null

    if(ants !== null){
        ants = ants.replace(/ant/g, '')
    }

    if(ants === null || ants.trim() === ''){
        return 0;
    }
    else{
        const antsA = (ants.match(/a/g) || []).length;
        const antsT = (ants.match(/t/g) || []).length;
        const antsN = (ants.match(/n/g) || []).length;

        const finalcount = Math.max(antsA, antsT, antsN)
        return finalcount
    }
}

const antsProblem = '...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t'
const antsDead = DeadAnts(antsProblem)

console.log("Your dead ants number is: "+ antsDead)