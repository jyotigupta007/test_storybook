var a = [19, 13, 7],
    b = [0, 13, 7];

let calC = function(VolumeArray, InitialArray) {

    for (var i = 0; i <= 3; i++) {
        if (i < 2) {
            var Diff = VolumeArray[i + 1] - InitialArray[i + 1];
            InitialArray[i] -= Diff;
            InitialArray[i + 1] += Diff;
            console.log("case 1", InitialArray)
        } else if (i != 3) {
            var Diff = VolumeArray[0] - InitialArray[0];
            if (Diff >= InitialArray[2]) {
                InitialArray[0] += InitialArray[2];
                InitialArray[2] = 0;
            } else {
                InitialArray[0] += InitialArray[2] - Diff;
                InitialArray[2] += InitialArray[2] - Diff;
            }
            console.log("case 2",InitialArray)
        } else {
            i = 1;
            var Diff = VolumeArray[i + 1] - InitialArray[i + 1];
            if (InitialArray[i] <= Diff) {
                InitialArray[i + 1] += InitialArray[i];
                InitialArray[i] = 0;
            } else {
                InitialArray[i + 1] += VolumeArray[i + 1];
                InitialArray[i] = InitialArray[i] - Diff;
            }
            console.log("case 3", InitialArray);
            i = 0;
            break;
        }
    }
}

calC(a, b);