/**
 * create By Songbw on 2018/2/28
 * */

define(function () {
	var fontPosition = [
//	点2
		{top: 60, left: 30},

		{top: 50, left: 40},{top: 60, left: 40},{top: 70, left: 40},{top: 80, left: 40},{top: 90, left: 40},
		{top: 100, left: 40},{top: 110, left: 40},{top: 120, left: 40},{top: 130, left: 40},{top: 140, left: 40},
		{top: 150, left: 40},

		{top: 50, left: 50},{top: 60, left: 50},{top: 70, left: 50},{top: 80, left: 50},{top: 90, left: 50},
		{top: 100, left: 50},{top: 110, left: 50},{top: 120, left: 50},{top: 130, left: 50},{top: 140, left: 50},

		{top: 60, left: 60},{top: 70, left: 60},{top: 80, left: 60},{top: 90, left: 60},
		{top: 100, left: 60},{top: 110, left: 60},{top: 120, left: 60},{top: 130, left: 60},{top: 140, left: 60},

		{top: 90, left: 70},{top: 90, left: 80},{top: 100, left: 70},{top: 100, left: 80},{top: 110, left: 70},

		{top: 77, left: 90},{top: 87, left: 90},{top: 97, left: 90},{top: 107, left: 90},

		{top: 72, left: 100},{top: 82, left: 100},{top: 92, left: 100},{top: 102, left: 100},

		{top: 75, left: 110},{top: 85, left: 110},{top: 95, left: 110},

		{top: 79, left: 120},{top: 89, left: 120},

		{top: 141, left: 70},{top: 151, left: 70},{top: 161, left: 70},{top: 171, left: 70},{top: 181, left: 70},

		{top: 142, left: 80},{top: 152, left: 80},{top: 162, left: 80},{top: 172, left: 80},

		{top: 143, left: 90},{top: 153, left: 90},{top: 163, left: 90},{top: 173, left: 90},

		{top: 144, left: 100},{top: 154, left: 100},{top: 164, left: 100},

		{top: 170, left: 60},{top: 180, left: 60},{top: 190, left: 60},

		{top: 180, left: 50},{top: 190, left: 50},

		{top: 190, left: 40},{top: 200, left: 40},

		{top: 195, left: 30},{top: 195, left: 20},{top: 195, left: 10},{top: 195, left: 0},

		{top: 205, left: 30},{top: 205, left: 20},{top: 205, left: 10},

		{top: 185, left: -5},{top: 185, left: 5},{top: 185, left: 15},

		{top: 175, left: -2},{top: 175, left: 8},

		{top: 165, left: -1},{top: 165, left: 9},{top: 165, left: 19},

		{top: 155, left: 0},{top: 155, left: 10},{top: 155, left: 20},{top: 155, left: 30},

		{top: 145, left: 10},{top: 145, left: 20},{top: 145, left: 30},

		{top: 210, left: 90},{top: 210, left: 100},

		{top: 220, left: -1-0},{top: 220, left: 0},{top: 220, left: 70},{top: 220, left: 80},{top: 220, left: 110},
		{top: 220, left: 120},{top: 220, left: 130},

		{top: 230, left: -20},{top: 230, left: -10},{top: 230, left: 70},{top: 230, left: 80},{top: 230, left: 90},
		{top: 230, left: 120},{top: 230, left: 130},{top: 230, left: 140},

		{top: 240, left: -20},{top: 240, left: -10},{top: 240, left: 0},{top: 240, left: 30},{top: 240, left: 40},
		{top: 240, left: 60},{top: 240, left: 70},{top: 240, left: 80},{top: 240, left: 115},{top: 240, left: 125},
		{top: 240, left: 135},{top: 240, left: 145},{top: 240, left: 155},

		{top: 250, left: -30},{top: 250, left: -20},{top: 250, left: -10},{top: 250, left: 0},{top: 250, left: 10},
		{top: 250, left: 30},{top: 250, left: 40},{top: 250, left: 60},{top: 250, left: 70},{top: 250, left: 80},
		{top: 250, left: 103},{top: 250, left: 113},{top: 250, left: 123},{top: 250, left: 133},{top: 250, left: 143},

//	亮2
//几
		{top: 220, left: 160},{top: 220, left: 170},{top: 220, left: 180},{top: 220, left: 190},

		{top: 210, left: 180},{top: 210, left: 190},

		{top: 200, left: 185},{top: 200, left: 195},{top: 200, left: 205},

		{top: 190, left: 195},{top: 190, left: 205},

		{top: 180, left: 200},{top: 180, left: 210},

		{top: 170, left: 200},{top: 170, left: 210},

		{top: 160, left: 205},{top: 159, left: 215},{top: 158, left: 225},{top: 157, left: 235},{top: 157, left: 245},
		{top: 157, left: 255},{top: 157, left: 265},

		{top: 167, left: 255},{top: 167, left: 265},{top: 177, left: 255},{top: 177, left: 265},{top: 187, left: 255},
		{top: 187, left: 265},

		{top: 197, left: 258},{top: 197, left: 268},{top: 197, left: 278},{top: 207, left: 268},{top: 207, left: 278},

		{top: 202, left: 288},{top: 202, left: 298},{top: 202, left: 308},{top: 202, left: 318},{top: 202, left: 328},
		{top: 202, left: 338},
		{top: 212, left: 288},{top: 212, left: 298},{top: 212, left: 308},{top: 212, left: 318},{top: 212, left: 328},
		{top: 212, left: 338},

		{top: 192, left: 323},{top: 192, left: 333},{top: 192, left: 343},

		{top: 182, left: 338},{top: 182, left: 348},{top: 172, left: 338},{top: 172, left: 348},{top: 162, left: 348},
//中间
		{top: 151, left: 160},{top: 141, left: 160},

		{top: 160, left: 170},{top: 150, left: 170},{top: 140, left: 170},{top: 130, left: 170},

		{top: 129, left: 180},{top: 128, left: 190},{top: 127, left: 200},{top: 126, left: 210},{top: 125, left: 220},
		{top: 124, left: 230},{top: 123, left: 240},{top: 122, left: 250},{top: 121, left: 260},{top: 120, left: 270},
		{top: 119, left: 280},

		{top: 119, left: 180},{top: 118, left: 190},{top: 117, left: 200},{top: 116, left: 210},{top: 115, left: 220},
		{top: 114, left: 230},{top: 113, left: 240},{top: 112, left: 250},{top: 111, left: 260},{top: 110, left: 270},
		{top: 109, left: 280},

		{top: 139, left: 280},{top: 112, left: 290},{top: 122, left: 290},{top: 132, left: 290},

		{top: 117, left: 300},{top: 127, left: 300},

		{top: 96, left: 210},{top: 95, left: 220},{top: 94, left: 230},{top: 93, left: 240},

		{top: 87, left: 200},{top: 86, left: 210},{top: 83, left: 240},{top: 82, left: 250},

		{top: 77, left: 197},{top: 76, left: 207},{top: 73, left: 243},{top: 72, left: 253},

		{top: 67, left: 200},{top: 66, left: 210},{top: 63, left: 243},{top: 62, left: 253},

		{top: 57, left: 203},{top: 56, left: 213},{top: 55, left: 223},{top: 54, left: 233},{top: 53, left: 243},
		{top: 52, left: 253},

		{top: 57, left: 263},{top: 62, left: 263},
//  头部
		{top: 38, left: 160},{top: 37, left: 170},{top: 36, left: 180},{top: 35, left: 190},{top: 34, left: 200},
		{top: 33, left: 210},

		{top: 30, left: 220},{top: 30, left: 230},
		{top: 30, left: 240},{top: 30, left: 250},{top: 30, left: 260},{top: 30, left: 270},{top: 30, left: 280},

		{top: 27, left: 170},{top: 26, left: 180},{top: 25, left: 190},{top: 24, left: 200},{top: 23, left: 210},

		{top: 20, left: 220},{top: 20, left: 230},
		{top: 20, left: 240},{top: 20, left: 250},{top: 20, left: 260},{top: 20, left: 270},{top: 20, left: 280},
		{top: 20, left: 290},

		{top: 10, left: 220},{top: 10, left: 230},{top: 10, left: 240},{top: 0, left: 220},{top: 0, left: 230},
		/*//		火
				{top: -250, left: 110},{top: -240, left: 110},{top: -230, left: 110},{top: -220, left: 110},{top: -210, left: 110},

		//		左边
				{top: -200, left: 120},{top: -190, left: 120},{top: -180, left: 120},

				{top: -170, left: 110},{top: -170, left: 100},

				{top: -190, left: 100},{top: -180, left: 100},{top: -160, left: 100},{top: -150, left: 100},

				{top: -140, left: 110},{top: -130, left: 110},{top: -120, left: 110},{top: -110, left: 110},

				{top: -100, left: 100},{top: -90, left: 100},{top: -80, left: 90},{top: -80, left: 80},

				{top: -90, left: 70},{top: -100, left: 70},{top: -110, left: 70},{top: -120, left: 70},{top: -130, left: 70},

				{top: -100, left: 60},

				{top: -90, left: 50},{top: -80, left: 50},

				{top: -70, left: 40},{top: -60, left: 40},{top: -50, left: 40},{top: -40, left: 40},

				{top: -30, left: 50},{top: -20, left: 60},{top: -10, left: 70},

		//		右边
				{top: -230, left: 120},{top: -220, left: 130},{top: -210, left: 140},{top: -200, left: 150},

		//		{top: -230, left: 170},{top: -220, left: 170},{top: -210, left: 170},{top: -200, left: 170},

				{top: -190, left: 150},{top: -180, left: 150},{top: -170, left: 150},

				{top: -160, left: 140},{top: -150, left: 130},{top: -140, left: 130},{top: -130, left: 140},

				{top: -140, left: 150},{top: -130, left: 150},{top: -120, left: 150},{top: -110, left: 150},{top: -100, left: 150},

				{top: -90, left: 140},{top: -80, left: 140},{top: -70, left: 140},{top: -60, left: 150},{top: -60, left: 160},
				{top: -70, left: 170},

				{top: -80, left: 180},{top: -90, left: 180},{top: -100, left: 180},{top: -110, left: 180},{top: -120, left: 180},

				{top: -70, left: 190},{top: -60, left: 190},{top: -50, left: 190},{top: -40, left: 190},{top: -30, left: 190},

				{top: -20, left: 180},{top: -10, left: 170},{top: 0, left: 160},

				{top: 0, left: 150},{top: 0, left: 140},{top: 0, left: 130},{top: 0, left: 120},{top: 0, left: 110},
				{top: 0, left: 100},{top: 0, left: 90},{top: 0, left: 80},

		//填充
				{top: -10, left: 160},{top: -10, left: 150},{top: -10, left: 140},{top: -10, left: 130},{top: -10, left: 120},
				{top: -10, left: 110},{top: -10, left: 100},{top: -10, left: 90},{top: -10, left: 80},

				{top: -20, left: 170},
				{top: -20, left: 160},{top: -20, left: 150},{top: -20, left: 140},{top: -20, left: 130},{top: -20, left: 120},
				{top: -20, left: 110},{top: -20, left: 100},{top: -20, left: 90},{top: -20, left: 80},{top: -20, left: 70},

				{top: -30, left: 180},{top: -30, left: 170},
				{top: -30, left: 160},{top: -30, left: 150},{top: -30, left: 140},{top: -30, left: 130},{top: -30, left: 120},
				{top: -30, left: 110},{top: -30, left: 100},{top: -30, left: 90},{top: -30, left: 80},{top: -30, left: 70},
				{top: -30, left: 60},

				{top: -40, left: 180},{top: -40, left: 170},
				{top: -40, left: 160},{top: -40, left: 150},{top: -40, left: 140},{top: -40, left: 130},{top: -40, left: 120},
				{top: -40, left: 110},{top: -40, left: 100},{top: -40, left: 90},{top: -40, left: 80},{top: -40, left: 70},
				{top: -40, left: 60},{top: -40, left: 50},

				{top: -50, left: 180},{top: -50, left: 170},{top: -50, left: 160},
				{top: -50, left: 150},{top: -50, left: 140},{top: -50, left: 130},{top: -50, left: 120},
				{top: -50, left: 110},{top: -50, left: 100},{top: -50, left: 90},{top: -50, left: 80},{top: -50, left: 70},
				{top: -50, left: 60},{top: -50, left: 50},

				{top: -60, left: 180},{top: -60, left: 170},{top: -60, left: 140},{top: -60, left: 130},
				{top: -60, left: 120},{top: -60, left: 110},{top: -60, left: 100},{top: -60, left: 90},{top: -60, left: 80},
				{top: -60, left: 70},{top: -60, left: 60},{top: -60, left: 50},

				{top: -70, left: 180},{top: -70, left: 140},{top: -70, left: 130},{top: -70, left: 120},
				{top: -70, left: 110},{top: -70, left: 100},{top: -70, left: 90},{top: -70, left: 80},{top: -70, left: 70},
				{top: -70, left: 60},{top: -70, left: 50},

				{top: -80, left: 130},{top: -80, left: 120},{top: -80, left: 110},{top: -80, left: 100},
				{top: -80, left: 70},{top: -80, left: 60},

				{top: -90, left: 130},{top: -90, left: 120},{top: -90, left: 110},

				{top: -100, left: 140},{top: -100, left: 130},{top: -100, left: 120},{top: -100, left: 110},

				{top: -110, left: 140},{top: -110, left: 130},{top: -110, left: 120},

				{top: -120, left: 140},{top: -120, left: 130},{top: -120, left: 120},

				{top: -130, left: 130},{top: -130, left: 120},

				{top: -140, left: 120},

				{top: -150, left: 120},{top: -150, left: 110},

				{top: -160, left: 130},{top: -160, left: 120},{top: -160, left: 110},

				{top: -170, left: 140},{top: -170, left: 130},{top: -170, left: 120},

				{top: -180, left: 140},{top: -180, left: 130},

				{top: -190, left: 140},{top: -190, left: 130},

				{top: -200, left: 140},{top: -200, left: 130},

				{top: -210, left: 130},{top: -210, left: 120},

				{top: -220, left: 120},*/
		/*//  点
				{top: -500, left: 145},{top: -490, left: 145},{top: -480, left: 145},{top: -470, left: 145},{top: -460, left: 145},
				{top: -450, left: 145},{top: -440, left: 145},{top: -430, left: 145},{top: -420, left: 145},{top: -410, left: 145},

				{top: -460, left: 155},{top: -460, left: 165},{top: -460, left: 175},{top: -460, left: 185},{top: -460, left: 195},
				{top: -460, left: 205},{top: -460, left: 215},

				{top: -400, left: 75},{top: -400, left: 85},{top: -400, left: 95},{top: -400, left: 105},{top: -400, left: 115},
				{top: -400, left: 125},{top: -400, left: 135},{top: -400, left: 145},{top: -400, left: 155},{top: -400, left: 165},
				{top: -400, left: 175},{top: -400, left:185},{top: -400, left: 195},{top: -400, left: 205},{top: -400, left: 215},

				{top: -390, left: 75},{top: -380, left: 75},{top: -370, left: 75},{top: -360, left: 75},

				{top: -390, left: 215},{top: -380, left: 215},{top: -370, left: 215},{top: -360, left: 215},


				{top: -350, left: 75},{top: -350, left: 85},{top: -350, left: 95},{top: -350, left: 105},{top: -350, left: 115},
				{top: -350, left: 125},{top: -350, left: 135},{top: -350, left: 145},{top: -350, left: 155},{top: -350, left: 165},
				{top: -350, left: 175},{top: -350, left:185},{top: -350, left: 195},{top: -350, left: 205},{top: -350, left: 215},

				{top: -290, left: 45},{top: -300, left: 55},{top: -310, left: 65},

				{top: -290, left: 125},{top: -300, left: 115},{top: -310, left: 105},

				{top: -290, left: 185},{top: -300, left: 175},{top: -310, left: 165},

				{top: -310, left: 225},{top: -300, left: 235},{top: -290, left: 245},*/

		/*//亮
				{top: -220, left: 135},{top: -210, left: 145},{top: -200, left: 155},

				{top: -190, left: 75},{top: -190, left: 85},{top: -190, left: 95},{top: -190, left: 105},{top: -190, left: 115},
				{top: -190, left: 125},{top: -190, left: 135},{top: -190, left: 145},{top: -190, left: 155},{top: -190, left: 165},
				{top: -190, left: 175},{top: -190, left:185},{top: -190, left: 195},{top: -190, left: 205},{top: -190, left: 215},

				{top: -160, left: 100},{top: -160, left: 110},{top: -160, left: 120},{top: -160, left: 130},{top: -160, left: 140},
				{top: -160, left: 150},{top: -160, left: 160},{top: -160, left: 170},{top: -160, left: 180},{top: -160, left: 190},

				{top: -130, left: 100},{top: -130, left: 110},{top: -130, left: 130},{top: -130, left: 130},{top: -130, left: 140},
				{top: -130, left: 150},{top: -130, left: 130},{top: -130, left: 170},{top: -130, left: 180},{top: -130, left: 190},


				{top: -150, left: 100},{top: -140, left: 100},

				{top: -150, left: 190},{top: -140, left: 190},

				{top: -100, left: 45},{top: -100, left: 55},{top: -100, left: 65},
				{top: -100, left: 75},{top: -100, left: 85},{top: -100, left: 95},{top: -100, left: 105},{top: -100, left: 115},
				{top: -100, left: 125},{top: -100, left: 135},{top: -100, left: 145},{top: -100, left: 155},{top: -100, left: 165},
				{top: -100, left: 175},{top: -100, left:185},{top: -100, left: 195},{top: -100, left: 205},{top: -100, left: 215},
				{top: -100, left: 225},{top: -100, left: 235},{top: -100, left: 245},

				{top: -90, left: 245},{top: -80, left: 245},{top: -70, left: 245},

				{top: -90, left: 45},{top: -70, left: 45},{top: -80, left: 45},

				{top: -70, left: 120},{top: -70, left: 130},{top: -70, left: 140},
				{top: -70, left: 150},{top: -70, left: 160},{top: -70, left: 170},

				{top: -60, left: 115},{top: -50, left: 113},{top: -40, left: 110},{top: -30, left: 105},{top: -26, left: 98},
				{top: -22, left: 92},{top: -17, left: 85},{top: -10, left: 78},


				{top: -60, left: 170},{top: -50, left: 170},{top: -40, left: 170},{top: -30, left: 170},{top: -20, left: 175},

				{top: -10, left: 180},{top: -10, left: 190},{top: -10, left: 200},{top: -10, left: 210},{top: -15, left: 220},

				{top: -20, left: 220},{top: -30, left: 220},*/

		/*//城
				{top: 160, left: -140},{top: 170, left: -140},
				{top: 150, left: -140},{top: 140, left: -140},{top: 130, left: -140},{top: 120, left: -140},{top: 110, left: -140},
				{top: 100, left: -140},{top: 90, left: -140},

				{top: 120, left: -160},{top: 120, left: -150},{top: 120, left: -130},{top: 120, left: -120},

				{top: 190, left: -160},{top: 180, left: -150},{top: 160, left: -130},{top: 150, left: -120},

				{top: 100, left: -100},
				{top: 100, left: -90},{top: 100, left: -80},{top: 100, left: -70},{top: 100, left: -60},{top: 100, left: -50},
				{top: 100, left: -40},{top: 100, left: -30},{top: 100, left: -20},{top: 100, left: -10},{top: 100, left: 0},

				{top: 110, left: -100},{top: 120, left: -100},{top: 130, left: -100},{top: 140, left: -100},{top: 150, left: -100},
				{top: 160, left: -100},{top: 170, left: -100},{top: 180, left: -100},{top: 190, left: -100},

				{top: 200, left: -110},{top: 210, left: -120},{top: 220, left: -130},{top: 230, left: -140},


				{top: 140, left: -90},{top: 140, left: -80},{top: 140, left: -70},{top: 140, left: -60},

				{top: 150, left: -60},{top: 160, left: -60},{top: 170, left: -60},{top: 180, left: -60},{top: 190, left: -60},
				{top: 200, left: -60},

				{top: 210, left: -70},{top: 220, left: -80},{top: 230, left: -90},

				{top: 70, left:-30},{top: 80, left: -30},{top: 90, left: -30},{top: 110, left: -30},{top: 120, left: -30},
				{top: 130, left: -30},{top: 140, left: -30},{top: 150, left: -30},{top: 160, left: -30},{top: 170, left: -30},
				{top: 180, left: -30},{top: 190, left: -30},

				{top: 70, left: 0},{top: 80, left: 0},

				{top: 200, left: -20},{top: 210, left: -10},{top: 220, left: 0},{top: 230, left: 10},

				{top: 210, left: -30},{top: 220, left: -40},{top: 190, left: -10},{top: 180, left: 0},

				{top: 170, left: 0},{top: 160, left: 0},{top: 150, left: 0},{top: 140, left: 0},*/

		/*//市
				{top: 70, left: 75},{top: 80, left: 75},

				{top: 100, left: 20},
				{top: 100, left: 30},{top: 100, left: 40},{top: 100, left: 50},{top: 100, left: 60},{top: 100, left: 70},
				{top: 100, left: 80},{top: 100, left: 90},{top: 100, left: 100},{top: 100, left: 110},{top: 100, left: 120},
				{top: 100, left: 130},

				{top: 130, left: 65},{top: 140, left: 55},{top: 150, left: 45},{top: 160, left: 35},{top: 170, left: 25},
				{top: 180, left: 35},{top: 190, left: 45},

				{top: 130, left: 85},{top: 140, left: 95},{top: 150, left: 105},{top: 160, left: 115},{top: 170, left: 125},
				{top: 180, left: 115},{top: 190, left: 105},

				{top: 110, left: 75},{top: 120, left: 75},{top: 130, left: 75},{top: 140, left: 75},{top: 150, left: 75},
				{top: 160, left: 75},{top: 170, left: 75},{top: 180, left: 75},{top: 190, left: 75},{top: 200, left: 75},
				{top: 210, left: 75},{top: 220, left: 75},{top: 230, left: 75},*/


		/*//之
				{top: 70, left: 195},{top: 80, left: 195},

				{top: 100, left: 150},{top: 100, left: 160},
				{top: 100, left: 170},{top: 100, left: 180},{top: 100, left: 190},{top: 100, left: 200},{top: 100, left: 210},
				{top: 100, left: 220},{top: 100, left: 230},{top: 100, left: 240},

				{top: 110, left: 230},{top: 120, left: 220},{top: 130, left: 210},{top: 140, left: 200},{top: 150, left: 190},
				{top: 160, left: 180},{top: 170, left: 170},{top: 180, left: 160},{top: 190, left: 150},

				{top: 200, left: 160},{top: 210, left: 170},{top: 220, left: 180},{top: 230, left: 190},

				{top: 230, left: 200},{top: 230, left: 210},{top: 230, left: 220},{top: 230, left: 230},{top: 230, left: 240},*/
		/*//光1
				{top: 140, left: 250},{top: 140, left: 260},{top: 140, left: 270},
				{top: 140, left: 280},{top: 140, left: 290},{top: 140, left: 300},{top: 140, left: 310},{top: 140, left: 320},
				{top: 140, left: 330},{top: 140, left: 340},{top: 140, left: 350},

				{top: 130, left: 300},{top: 120, left: 300},{top: 110, left: 300},{top: 100, left: 300},{top: 90, left: 300},
				{top: 80, left: 300},{top: 70, left: 300},

				{top: 90, left: 270},{top: 100, left: 270},{top: 110, left: 270},{top: 120, left: 270},

				{top: 90, left: 330},{top: 100, left: 330},{top: 110, left: 330},{top: 120, left: 330},

				{top: 180, left: 280},{top: 170, left: 280},{top: 160, left: 280},{top: 150, left: 280},

				{top: 220, left: 250},{top: 210, left: 260},{top: 200, left: 270},{top: 190, left: 280},


				{top: 150, left: 320},{top: 160, left: 320},{top: 170, left: 320},{top: 180, left: 320},
				{top: 190, left: 320},

				{top: 200, left: 330},{top: 210, left: 340},{top: 220, left: 350},{top: 230, left: 360},

				{top: 220, left: 370},{top: 210, left: 380},{top: 200, left: 390},{top: 190, left: 400},*/
		/*//光2
				{top: 70, left: 405},{top: 80, left: 405},{top: 90, left: 405},{top: 100, left: 405},{top: 110, left: 405},

				{top: 80, left: 360},{top: 90, left: 370},{top: 100, left: 380},

				{top: 100, left: 430},{top: 90, left: 440},{top: 80, left: 450},

				{top: 120, left: 350},
				{top: 120, left: 360},{top: 120, left: 370},{top: 120, left: 380},{top: 120, left: 390},{top: 120, left: 400},
				{top: 120, left: 410},{top: 120, left: 420},{top: 120, left: 430},{top: 120, left: 440},{top: 120, left: 450},
				{top: 120, left: 460},

				{top: 130, left: 390},{top: 140, left: 388},{top: 150, left: 386},{top: 160, left: 382},{top: 170, left: 376},
				{top: 180, left: 368},{top: 190, left: 360},

				{top: 130, left: 420},{top: 140, left: 420},{top: 150, left: 420},{top: 160, left: 420},{top: 170, left: 420},
				{top: 180, left: 425},{top: 190, left: 430},

				{top: 190, left: 440},{top: 190, left: 450},{top: 185, left: 460},

				{top: 180, left: 460},
		//大
				{top: -200, left: 50},{top: -200, left: 60},{top: -200, left: 70},{top: -200, left: 80},{top: -200, left: 90},
				{top: -200, left: 100},{top: -200, left: 110},{top: -200, left: 120},{top: -200, left: 130},{top: -200, left: 140},
				{top: -200, left: 150},{top: -200, left: 160},{top: -200, left: 170},{top: -200, left: 180},{top: -200, left: 190},
				{top: -200, left: 200},{top: -200, left: 210},{top: -200, left: 220},{top: -200, left: 230},{top: -200, left: 240},

				{top: -260, left: 145},
				{top: -250, left: 145},{top: -240, left: 145},{top: -230, left: 145},{top: -210, left: 145},{top: -190, left: 145},
				{top: -180, left: 145},{top: -170, left: 145},

				{top: -160, left: 135},{top: -150, left: 125},{top: -140, left: 115},{top: -130, left: 105},{top: -120, left: 95},
				{top: -110, left: 85},{top: -100, left: 75},{top: -90, left: 65},{top: -80, left: 55},

				{top: -160, left: 155},{top: -150, left: 165},{top: -140, left: 175},{top: -130, left: 185},{top: -120, left: 195},
				{top: -110, left: 205},{top: -100, left: 215},{top: -90, left: 225},{top: -80, left: 235},*/

		/*//		河
				{top: -40, left: 50},{top: -30, left: 60},{top: -20, left: 70},
				{top: 20, left: 50},{top: 30, left: 60},{top: 40, left: 70},
				{top: 80, left: 70},{top: 90, left: 60},{top: 100, left: 50},

				{top: -40, left: 100},{top: -40, left: 110},{top: -40, left: 120},{top: -40, left: 130},{top: -40, left: 140},
				{top: -40, left: 150},{top: -40, left: 160},{top: -40, left: 170},{top: -40, left: 180},{top: -40, left: 190},
				{top: -40, left: 200},{top: -40, left: 210},{top: -40, left: 220},{top: -40, left: 230},{top: -40, left: 240},

				{top: -40, left: 220},{top: -30, left: 220},{top: -20, left: 220},{top: -10, left: 220},{top: 0, left: 220},
				{top: 10, left: 220},{top: 20, left: 220},{top: 30, left: 220},{top: 40, left: 220},{top: 50, left: 220},
				{top: 60, left: 220},{top: 70, left: 220},{top: 80, left: 220},{top: 90, left: 220},{top: 100, left: 220},

				{top: 100, left: 210},{top: 100, left: 200},{top: 90, left: 190},{top: 80, left: 180},

				{top: 0, left: 130},{top: 0, left: 140},{top: 0, left: 150},{top: 0, left: 160},{top: 0, left: 170},
				{top: 0, left: 180},

				{top: 10, left: 130},{top: 20, left: 130},{top: 30, left: 130},

				{top: 10, left: 180},{top: 20, left: 180},{top: 30, left: 180},

				{top: 40, left: 130},{top: 40, left: 140},{top: 40, left: 150},{top: 40, left: 160},{top: 40, left: 170},
				{top: 40, left: 180},*/
//网

		/*{top: 150, left: 50},{top: 160, left: 50},{top: 170, left: 50},{top: 180, left: 50},{top: 190, left: 50},
		{top: 200, left: 50},{top: 210, left: 50},{top: 220, left: 50},{top: 230, left: 50},{top: 240, left: 50},
		{top: 250, left: 50},{top: 260, left: 50},{top: 270, left: 50},{top: 280, left: 50},{top: 290, left: 50},
		{top: 300, left: 50},{top: 310, left: 50},

		{top: 150, left: 60},{top: 150, left: 70},{top: 150, left: 80},{top: 150, left: 90},{top: 150, left: 100},
		{top: 150, left: 110},{top: 150, left: 120},{top: 150, left: 130},{top: 150, left: 140},{top: 150, left: 150},
		{top: 150, left: 160},{top: 150, left: 170},{top: 150, left: 180},{top: 150, left: 190},{top: 150, left: 200},
		{top: 150, left: 210},{top: 150, left: 220},{top: 150, left: 230},

		{top: 150, left: 240},{top: 160, left: 240},{top: 170, left: 240},{top: 180, left: 240},{top: 190, left: 240},
		{top: 200, left: 240},{top: 210, left: 240},{top: 220, left: 240},{top: 230, left: 240},{top: 240, left: 240},
		{top: 250, left: 240},{top: 260, left: 240},{top: 270, left: 240},{top: 280, left: 240},{top: 290, left: 240},
		{top: 300, left: 240},{top: 310, left: 240},

		{top: 310, left: 230},{top: 310, left: 220},{top: 300, left: 210},{top: 290, left: 200},

		{top: 200, left: 90},{top: 210, left: 100},{top: 220, left: 110},{top: 230, left: 120},{top: 240, left: 130},

		{top: 200, left: 130},{top: 210, left: 120},{top: 230, left: 100},{top: 240, left: 90},

		{top: 200, left: 160},{top: 210, left: 170},{top: 220, left: 180},{top: 230, left: 190},{top: 240, left: 200},

		{top: 200, left: 200},{top: 210, left: 190},{top: 230, left: 170},{top: 240, left: 160},

		{top: -100, left: 0},{top: -100, left:10},{top: -100, left: 20},{top: -100, left: 30},{top: -100, left: 40},
		{top: -100, left: 50},{top: -100, left: 60},{top: -100, left: 70},{top: -100, left: 80},{top: -100, left: 90},
		{top: -100, left: 100},{top: -100, left: 110},{top: -100, left: 120},{top: -100, left: 130},{top: -100, left: 140},
		{top: -100, left: 150},{top: -100, left: 160},{top: -100, left: 170},{top: -100, left: 180},{top: -100, left: 190},
		{top: -100, left: 200},{top: -100, left: 210},{top: -100, left: 220},{top: -100, left: 230},{top: -100, left: 240},
		{top: -100, left: 250},{top: -100, left: 260},{top: -100, left: 270},{top: -100, left: 280},{top: -100, left: 290},*/
	]

	var arr = fontPosition.map(function (item) {
		item.top = item.top - 90;
		item.left = item.left - 40;
		return item
	})

	return arr
})