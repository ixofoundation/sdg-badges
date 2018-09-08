const data = require('./svgs.json');

class SVGGenerator {

	star(numStar, isFull){
		if(isFull == true) {
			return `<g class='star${numStar}' fill='gold' stroke="#c39335" stroke-width="5px">${data.star}</g>`;
		} else {
			return `<g class='star${numStar}' fill='silver' stroke="grey" stroke-width="5px">${data.star}</g>`;
		}
	}

	baseCircle(color){
		return `<circle class='cls-1' cx='500' cy='600' r='500' fill="${color}"/>`;
	}

	innerRing(color){
		return `<circle class='cls-3' id='e1_circle' cx='500' cy='500' r='520' stroke="${color}"/>`;
	}

	outerRing(color){
		return `<circle class='cls-4' id='e1_circle' cx='500' cy='500' r='560' stroke="${color}"/>`;
	}

	branches(){
		return `<g class='cls-5' fill='gold'>
		<path d='M 1154.214844 910.808594 C 1114.019531 921.574219 1071.128906 925.035156 1032.089844 938.347656 C 1098.207031 881.652344 1094.433594 793.921875 1138.546875 727.144531 C 1152.597656 708.238281 1164.210938 688.417969 1180.59375 670.476562 C 1153.757812 724.308594 1165.394531 794.152344 1134.570312 846.390625 C 1122.703125 867.140625 1105.734375 887.273438 1086.96875 903.570312 C 1093.101562 903.34375 1098.464844 898.035156 1103.859375 894.488281 C 1153.925781 844.519531 1219.335938 830.542969 1273.5 789.945312 C 1295.195312 772.65625 1315.0625 750 1324.601562 725.496094 C 1314.351562 808.402344 1231.886719 886.109375 1154.214844 910.808594 Z M 1154.214844 910.808594 '/>
		<path d='M 1334.589844 575.140625 C 1310.09375 610.003906 1280.460938 642.457031 1257.828125 677.886719 C 1260.351562 649.835938 1263.675781 615.339844 1252.75 588.765625 C 1233.816406 531.542969 1217.179688 473.441406 1211.816406 410.636719 L 1212.554688 386.621094 C 1226.804688 450.757812 1289.796875 494.847656 1285.824219 566.789062 C 1287.265625 584.222656 1281.875 599.046875 1278.609375 614.378906 L 1279.691406 615.511719 L 1282.53125 612.332031 C 1291.871094 577.042969 1296.585938 539.933594 1311.109375 507.007812 C 1331.753906 459.628906 1357.527344 411.816406 1347.027344 354.609375 C 1378.421875 422.054688 1368.910156 512.164062 1334.589844 575.140625 Z M 1334.589844 575.140625 '/>
		<path d='M 1295.925781 211.773438 C 1337.234375 267.757812 1346.285156 356.980469 1316.199219 421.199219 C 1304.988281 448.414062 1297.066406 477.414062 1292.660156 507.539062 C 1290.558594 502.34375 1290.078125 495.355469 1288.203125 489.566406 C 1271.769531 426.707031 1212.328125 381.90625 1187.882812 322.640625 C 1180.128906 303.257812 1173.519531 283.234375 1169.855469 262.195312 C 1195.976562 310.515625 1260.351562 335.472656 1277.898438 388.722656 C 1285.085938 402.1875 1284.683594 419.015625 1289.140625 433.496094 C 1290.078125 433.496094 1291.015625 432.796875 1291.015625 431.847656 C 1283.292969 376.996094 1285.648438 319.585938 1293.089844 265.417969 C 1292.660156 236.074219 1289.796875 207.609375 1273.5 184.898438 C 1283.949219 190.988281 1288.65625 202.6875 1295.925781 211.773438 Z M 1295.925781 211.773438 '/>
		<path d='M 1266.800781 201.023438 C 1277.652344 250.085938 1261.804688 297.863281 1271.769531 347.398438 L 1271.398438 347.824219 C 1244.710938 295.339844 1188.058594 270.570312 1149.074219 228.5625 C 1126.484375 203.636719 1116.660156 173.257812 1111.011719 141.089844 C 1133.347656 194.949219 1193.621094 206.816406 1228.222656 252.199219 C 1239.800781 262.664062 1243.578125 277.15625 1251.042969 289.023438 L 1252.265625 287.84375 C 1232.367188 245.359375 1225.699219 197.546875 1211.816406 152.234375 C 1204.863281 132.601562 1191.066406 113.308594 1172.554688 100.929688 C 1217.980469 110.214844 1257.347656 157.644531 1266.800781 201.023438 Z M 1266.800781 201.023438 '/>
		<path d='M 1145.359375 88.507812 C 1179.566406 119.128906 1195.042969 158.78125 1205.03125 199.859375 L 1210.679688 212.90625 C 1161.027344 177.191406 1115.921875 129.179688 1084.214844 78.472656 L 1045.488281 39.292969 C 1079.53125 53.730469 1116.234375 62.347656 1145.359375 88.507812 Z M 1145.359375 88.507812 '/>
		<path d='M 361.148438 45.796875 C 326.828125 75.890625 303.023438 113.949219 277.558594 149.4375 C 254.734375 177.703125 225.539062 196.339844 199.664062 220.644531 C 213.632812 191.683594 214.140625 157.089844 233.953125 130.488281 C 262.144531 81.296875 314.421875 63.992188 361.148438 45.796875 Z M 361.148438 45.796875 '/>
		<path d='M 173.445312 150.589844 C 190.140625 129.835938 211.304688 115.410156 235.121094 109.320312 C 188.875 141.089844 191.886719 198.027344 177.226562 245.359375 C 172.550781 262.863281 164.433594 278.988281 160.390625 296.929688 L 161.566406 297.863281 C 169.261719 277.582031 182.785156 258.417969 199.664062 241.867188 C 232.507812 211.546875 281.09375 192.648438 297.1875 147.792969 C 296.453125 210.125 244.460938 259.128906 194.710938 294.160156 C 174.199219 312.160156 154.414062 332.675781 143.117188 355.816406 C 142.007812 340.089844 145.441406 324.296875 144.324219 307.453125 C 138.914062 253.039062 134.980469 190.929688 173.445312 150.589844 Z M 173.445312 150.589844 '/>
		<path d='M 79.882812 336.652344 C 78.488281 281.511719 101.371094 236.5 133.617188 195.417969 C 134.554688 194.949219 135.222656 194.011719 136.429688 194.238281 C 100.933594 248.183594 130.296875 316.136719 128.679688 377.476562 L 123.996094 440.277344 C 124.691406 440.734375 124.691406 442.621094 126.339844 441.898438 C 128.4375 434.898438 128.894531 427.417969 130.296875 420.21875 C 138.65625 369.558594 182.644531 333.613281 221.066406 298.605469 C 229.273438 289.449219 236.527344 280.152344 240.742188 269.40625 C 237.605469 294.628906 229.699219 320.070312 219.234375 343.398438 C 189.332031 401.722656 134.089844 449.578125 123.996094 516.351562 C 119.101562 452.363281 75.539062 404.519531 79.882812 336.652344 Z M 79.882812 336.652344 '/>
		<path d='M 53.027344 415.066406 C 57.003906 397.820312 60.039062 379.972656 67.546875 364.148438 C 53.324219 437.042969 102.347656 489.566406 118.429688 552.753906 C 125.160156 576.386719 126.804688 601.769531 136.429688 623.941406 C 137.324219 624.429688 138.105469 623.492188 138.65625 622.78125 C 114.714844 555.660156 149.277344 493.289062 184.007812 440.734375 C 192.453125 426.496094 197.320312 410.636719 201.523438 394.269531 C 205.210938 424.648438 197.53125 459.628906 193.121094 491.171875 C 184.675781 531.300781 172.070312 569.359375 161.097656 608.300781 C 153.875 632.632812 155.773438 660.085938 159.480469 685.582031 L 156.003906 682.800781 C 130.539062 635.839844 80.121094 599.214844 65.148438 547.910156 C 52.828125 507.007812 44.636719 459.628906 53.027344 415.066406 Z M 53.027344 415.066406 '/>
		<path d='M 50.726562 557.4375 C 56.335938 634.703125 139.410156 675.53125 177.921875 739.496094 C 187.03125 752.585938 194.9375 767.0625 207.113281 778.019531 C 205.210938 769.789062 197.53125 762.863281 194.710938 754.429688 C 181.238281 727.601562 176.328125 695.632812 179.566406 663.207031 C 183.296875 623.742188 199.847656 587.121094 193.53125 545.609375 C 227.371094 618.578125 217.09375 709.65625 236.011719 788.726562 C 240.96875 806.019531 250.976562 821.460938 257.53125 837.988281 C 188.007812 790.632812 93.207031 745.574219 62.363281 658.78125 C 49.367188 628.855469 47.914062 591.804688 50.726562 557.4375 Z M 50.726562 557.4375 '/>
		<path d='M 92.257812 734.867188 C 131.019531 822.574219 228.105469 829.835938 293.199219 883.242188 C 305.179688 893.859375 317.730469 902.890625 331.253906 909.191406 L 331.949219 908.484375 C 317.003906 894.96875 299.71875 879.578125 289.253906 862.0625 C 251.15625 809.082031 264.558594 734.867188 236.011719 677.886719 C 261.949219 708.917969 285.535156 741.171875 301.191406 776.375 C 324.484375 833.839844 333.382812 898.742188 387.277344 942.183594 C 328.953125 922.957031 260.625 928.328125 209.148438 892.410156 C 152.9375 857.863281 102.777344 799.261719 92.257812 734.867188 Z M 92.257812 734.867188 '/>
		<path d='M 191.886719 898.484375 C 254.039062 969.183594 355.597656 945.59375 438.390625 964.09375 C 450.085938 965.691406 460.789062 970.378906 473.183594 968.476562 C 463.3125 962.230469 449.617188 962.90625 438.84375 957.230469 C 373.949219 934.429688 364.429688 864.160156 329.199219 816.777344 C 374.207031 846.671875 412.046875 886.988281 453.566406 926.054688 C 483.414062 952.203125 519.339844 964.269531 557.191406 971.964844 C 548.09375 975.289062 536.171875 974.378906 526.40625 976.9375 C 458.402344 993.660156 382.847656 1020.996094 310.730469 996.523438 C 263.847656 981.761719 215.476562 944.683594 191.886719 898.484375 Z M 191.886719 898.484375 '/>
		<path d='M 1035.472656 1063.277344 C 965.433594 1089.417969 892.339844 1062.082031 837.636719 1020.59375 C 815.488281 1006.515625 795.964844 986.242188 767.320312 988.035156 C 756.929688 987.835938 746.910156 988.347656 738.078125 990.898438 C 791.222656 1015.632812 840.585938 1049.730469 885.722656 1093.335938 C 878.117188 1102.023438 868.265625 1110.148438 858.984375 1117.640625 C 815.488281 1070.769531 767.320312 1025.652344 713.382812 999.300781 C 702.824219 1000.671875 692.773438 1007.027344 683.25 1012.140625 C 639.34375 1039.90625 595.925781 1075.621094 563.285156 1119.347656 L 535.234375 1096.179688 C 580.003906 1050.886719 629.519531 1015.632812 683.691406 990.445312 C 630.460938 973.582031 595.714844 1018.183594 555.308594 1040.867188 C 508.222656 1073.75 440.507812 1089.191406 383.601562 1066.503906 C 353 1054.894531 323.351562 1037.800781 301.191406 1010.011719 C 345.976562 1040.867188 412.671875 1044.105469 463.601562 1024.0625 C 531.941406 994.417969 602.953125 956.835938 685.339844 974.808594 C 698.195312 975.035156 710.6875 987.835938 722.835938 976.9375 C 784.066406 961.035156 853.390625 971.964844 906.109375 999.957031 L 960.441406 1021.738281 C 1010.945312 1040.417969 1076.238281 1035.25 1119.527344 1004.476562 C 1097.269531 1032.179688 1066.867188 1052.03125 1035.472656 1063.277344 Z M 1035.472656 1063.277344 '/>
		<path d='M 1110.527344 990.898438 C 1031.890625 1020.59375 952.78125 984.144531 877.433594 971.964844 L 862.929688 970.121094 L 862.929688 969.664062 C 898.957031 961.488281 933.925781 950.757812 962.601562 924.867188 C 1004.839844 884.265625 1042.421875 842.46875 1089.324219 810.476562 C 1054.542969 855.078125 1050.855469 918.5625 993.398438 947.238281 C 979.179688 956.546875 961.234375 958.191406 946.558594 965.238281 C 967.484375 965.691406 986.644531 958.191406 1007.367188 956.09375 C 1084.414062 943.996094 1172.554688 956.40625 1226.605469 890.765625 C 1206.539062 936.503906 1156.285156 974.808594 1110.527344 990.898438 Z M 1110.527344 990.898438 '/>
		<path d='M 1253.402344 769.617188 C 1222.347656 789.945312 1190.871094 808.800781 1161.027344 831.910156 L 1161.027344 829.074219 C 1206.734375 753.097656 1184.390625 648.726562 1212.554688 565.117188 L 1223.058594 537.105469 C 1217.179688 589.195312 1239.800781 633.316406 1238.214844 685.582031 C 1236.625 717.152344 1226.320312 745.148438 1209.746094 770.359375 L 1212.554688 770.359375 C 1234.949219 740.941406 1252.4375 709.65625 1278.609375 681.636719 C 1319.234375 642.457031 1360.539062 602.28125 1365.871094 547.910156 C 1379.667969 638.679688 1328.742188 718.230469 1253.402344 769.617188 Z M 1253.402344 769.617188 '/>
	</g>`;
	}

	sdg(sdgNode){
		return sdgNode;
	}
	generateSVG(theNum){
		return `<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'>
		<title>${data.sdgs[theNum].title}</title>
			${data.styles}
			${this.baseCircle(data.sdgs[theNum].color)}
			${this.innerRing(data.sdgs[theNum].color)}
			${this.outerRing(data.sdgs[theNum].color)}
			${this.branches()}
			${this.sdg(data.sdgs[theNum].node)}
			${this.star(1, true)}
			${this.star(2, true)}
			${this.star(3, true)}
		</svg>`;
	}

	generateStringForImg(sdgNum){
		var encodedData = Buffer.from(this.generateSVG(sdgNum - 1)).toString('base64');
		return 'data:image/svg+xml;base64,' + encodedData; 
	}
}

module.exports = new SVGGenerator();

