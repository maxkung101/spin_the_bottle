﻿/* JavaScript Document */
var app = angular.module('plunker', ['ngStorage']);

app.controller('MainCtrl', function ($scope, $localStorage, $timeout, $window) {
    $scope.date = new Date();
    $scope.hour = $scope.date.getHours();
    // Language text: Bar
    $scope.attendance = function (test) {
        switch (test) {
            case "1":
                return "名單";
            case "2":
                return "名单";
			default:
                return "List";
        }
    };
    $scope.closingtime = function (test) {
        switch (test) {
            case "1":
                return "隨機器";
            case "2":
                return "随机器";
            default:
                return "Randomizer";
        }
    };
    $scope.timerbox = function (test) {
        switch (test) {
            case "1":
                return "計時器";
            case "2":
                return "计时器";
            default:
                return "Timer";
        }
    };
    $scope.extras = function (test) {
        switch (test) {
            case "1":
                return "演員";
            case "2":
                return "演员";
            default:
                return "Extras";
        }
    };
    // Language text: My List
    $scope.add = function (test) {
        switch (test) {
            case "1":
                return "加";
            case "2":
                return "加";
            default:
                return "Add";
        }
    };
    $scope.eraselistcontent = function (test) {
        switch (test) {
            case "1":
                return "你是要把名單重啟嗎？";
            case "2":
                return "你是要把名单重启吗？";
            default:
                return "Do you want to remove all names from the list?";
        }
    };
    $scope.listof = function (test) {
        switch (test) {
            case "1":
                return "我的小組";
            case "2":
                return "我的小组";
            default:
                return "My Small Group";
        }
    };
    $scope.nameplace = function (test) {
        switch (test) {
            case "1":
                return "名字";
            case "2":
                return "名字";
            default:
                return "Name";
        }
    };
    $scope.no = function (test) {
        switch (test) {
            case "1":
                return "否";
            case "2":
                return "否";
            default:
                return "No";
        }
    };
    $scope.totalcount = function (test) {
        switch (test) {
            case "1":
                return "總金額";
            case "2":
                return "总金额";
            default:
                return "Headcount";
        }
    };
    $scope.yes = function (test) {
        switch (test) {
            case "1":
                return "是";
            case "2":
                return "是";
            default:
                return "Yes";
        }
    };
    // Language text: Timer
    $scope.measured = function (test) {
        switch (test) {
            case "1":
                return "時間以分鐘和秒為單位。";
            case "2":
                return "时间以分钟和秒为单位。";
            default:
                return "Time measured in minutes and seconds.";
        }
    };
    $scope.qa = function (test) {
        switch (test) {
            case "1":
                return "QA 計時器";
            case "2":
                return "QA 计时器";
            default:
                return "QA timer";
        }
    };
    $scope.prayer = function (test) {
        switch (test) {
            case "1":
                return "禱告計時器";
            case "2":
                return "祷告计时器";
            default:
                return "Prayer timer";
        }
    };
    $scope.startbutton = function (test) {
        switch (test) {
            case "1":
                return "開始";
            case "2":
                return "开始";
            default:
                return "Start";
        }
    };
    $scope.stopbutton = function (test) {
        switch (test) {
            case "1":
                return "停止";
            case "2":
                return "停止";
            default:
                return "Stop";
        }
    };
	$scope.sortgroup = function (test) {
        switch (test) {
            case "1":
                return "隨機組";
            case "2":
                return "随机组";
            default:
                return "Shuffle group";
        }
    };
    // Language text: Randomizer
    $scope.biblereading = function (test) {
        switch (test) {
            case "1":
                return "唸聖經";
            case "2":
                return "念圣经";
            default:
                return "Bible reading";
        }
    };
    $scope.closeprayer = function (test) {
        switch (test) {
            case "1":
                return "結束祈禱";
            case "2":
                return "结束祈祷";
            default:
                return "Close prayer";
        }
    };
    $scope.whoshall = function (test) {
        switch (test) {
            case "1":
                return "是誰要幫我們祈禱？";
            case "2":
                return "是谁要帮我们祈祷？";
            default:
                return "Who shall pray for us?";
        }
    };
    $scope.whowill = function (test) {
        switch (test) {
            case "1":
                return "是誰要先唸給我們？";
            case "2":
                return "是谁要先念给我们？";
            default:
                return "Who will we start with?";
        }
    };
    // Language text: Extras
    $scope.about = function (test) {
        switch (test) {
            case "1":
                return "關於";
            case "2":
                return "关于";
            default:
                return "About";
        }
    };
    $scope.closebtn = function (test) {
        switch (test) {
            case "1":
                return "關閉";
            case "2":
                return "关闭";
            default:
                return "Close";
        }
    };
    $scope.credits = function (test) {
        switch (test) {
            case "1":
                return "信用";
            case "2":
                return "信用";
            default:
                return "Credits";
        }
    };
    $scope.language = function (test) {
        switch (test) {
            case "1":
                return "語言";
            case "2":
                return "语言";
			default:
                return "Language";
        }
    };
	$scope.privacy = function (test) {
        switch (test) {
            case "1":
                return "隱私政策";
            case "2":
                return "隐私政策";
			default:
                return "Privacy Policy";
        }
    };
    $scope.settings = function (test) {
        switch (test) {
            case "1":
                return "設定";
            case "2":
                return "设定";
            default:
                return "Settings";
        }
    };
    $scope.spinningthing = function (test) {
        switch (test) {
            case "1":
                return "按鍵";
            case "2":
                return "按键";
            default:
                return " button";
        }
    };
    $scope.terms = function (test) {
        switch (test) {
            case "1":
                return "使用條款";
            case "2":
                return "使用条款";
            default:
                return "Terms of Use";
        }
    };
    $scope.theme = function (test) {
        switch (test) {
            case "1":
                return "主題";
            case "2":
                return "主题";
            default:
                return " theme";
        }
    };
    // Language text: Spinners
    $scope.spinnerLoadingSymbol = function (test) {
        switch (test) {
            case "1":
                return "加載符號";
            case "2":
                return "加载符号";
            default:
                return "Loading symbol";
        }
    };
    $scope.spinnerFidget = function (test) {
        switch (test) {
            case "1":
                return "手指旋轉";
            case "2":
                return "手指旋转";
            default:
                return "Finger spinner";
        }
    };
	$scope.spinnerBottle = function (test) {
        switch (test) {
            case "1":
                return "旋轉的瓶子";
            case "2":
                return "旋转的瓶子";
            default:
                return "Spinning Bottle";
        }
    };
    $scope.spinnerMiku = function (test) {
        switch (test) {
            case "1":
                return "初音未來";
            case "2":
                return "初音未来";
            default:
                return "Hatsune Miku";
        }
    };
    $scope.spinnerMario = function (test) {
        switch (test) {
            case "1":
                return "瑪利歐";
            case "2":
                return "马力欧";
            default:
                return "Mario";
        }
    };
    $scope.spinnerNyanCat = function (test) {
        switch (test) {
            case "1":
                return "Pop Tart 貓";
            case "2":
                return "Pop Tart 猫";
            default:
                return "Nyan Cat";
        }
    };
    $scope.spinnerPikachu = function (test) {
        switch (test) {
            case "1":
                return "皮卡丘";
            case "2":
                return "皮卡丘";
            default:
                return "Pikachu";
        }
    };
    $scope.defaulttimer = function (test) {
        switch (test) {
            case "1":
                return "白色";
            case "2":
                return "白色";
            default:
                return "White";
        }
    };
    $scope.timerTheme1 = function (test) {
        switch (test) {
            case "1":
                return "黑色";
            case "2":
                return "黑色";
            default:
                return "Black";
        }
    };
    $scope.timerTheme3 = function (test) {
        switch (test) {
            case "1":
                return "深藍";
            case "2":
                return "深蓝";
            default:
                return "Dark Blue";
        }
    };
    $scope.timerTheme6 = function (test) {
        switch (test) {
            case "1":
                return "美國顏色";
            case "2":
                return "美国颜色";
            default:
                return "USA Colors";
        }
    };
    $scope.timerTheme7 = function (test) {
        switch (test) {
            case "1":
                return "中國顏色";
            case "2":
                return "中国颜色";
            default:
                return "China Colors";
        }
    };
    $scope.timerTheme8 = function (test) {
        switch (test) {
            case "1":
                return "台灣顏色";
            case "2":
                return "台湾颜色";
            default:
                return "Taiwan Colors";
        }
    };
    $scope.timerTheme9 = function (test) {
        switch (test) {
            case "1":
                return "香港顏色";
            case "2":
                return "香港颜色";
            default:
                return "Hong Kong Colors";
        }
    };
    $scope.colon = function (test) {
        switch (test) {
            case "1":
                return "：";
            case "2":
                return "：";
            default:
                return ":";
        }
    };
	// --------------------------------------------------
	$scope.personType = function (test) {
		switch (test) {
			case 1:
				return $scope.counselor($scope.selectedLanguage) + $scope.colon($scope.selectedLanguage) + " ";
				break;
			default:
				return "";
		}
    };
    // --------------------------------------------------
	// Prayer timer
	$scope.prayerTimerCH_TR = ["... 以你的名義祈禱，阿們。", "... 以耶穌的名字，阿們。"];
	$scope.prayerTimerCH_SP = ["... 以你的名义祈祷，阿们。", "... 以耶稣的名字，阿们。"];
	$scope.prayerTimerEN_US = ["... In your name I pray, Amen.", "... In Jesus name, Amen."];
	// --------------------------------------------------
    // Set text functions
    $scope.textListEmpty = function() {
        $scope.result0 = "Please fill list first.";
        $scope.result1 = "請先填寫清單。";
        $scope.result2 = "请先填写清单。";
    };
    $scope.textListNotready = function() {
        $scope.result0 = "Please add more people.";
        $scope.result1 = "請添加更多的人。";
        $scope.result2 = "请添加更多的人。";
    };
    $scope.textListReady = function() {
        $scope.result0 = "Touch picture to begin.";
        $scope.result1 = "點擊圖片開始。";
        $scope.result2 = "点击图片开始。";
    };
    // --------------------------------------------------
    // Init
    $scope.spinning = false;
    $scope.list = $localStorage.mylist || [];
	$scope.noCounselors = [];
    if ($scope.list.length == 0) {
        $scope.textListEmpty();
    } else if ($scope.list.length == 1) {
        $scope.textListNotready();
    } else {
        $scope.textListReady();
    }
    $scope.timerRadio = $localStorage.timerRadio || "qa";
	$scope.changeTimerRadio = function () {
		$localStorage.timerRadio = $scope.timerRadio;
	};
    $scope.randomizerRadio = $localStorage.randomizerRadio || "st";
    $scope.selectedLanguage = $localStorage.selectedLanguage || "0";
	$scope.myStyle={};
    $scope.changeLanguage = function () {
        $localStorage.selectedLanguage = $scope.selectedLanguage;
		$scope.myStyle={};
    };
    $scope.selectedSpinner = $localStorage.selectedSpinner || "0";
    $scope.changeSpinner = function () {
        $localStorage.selectedSpinner = $scope.selectedSpinner;
    };
    $scope.selectedTimer = $localStorage.selectedTimer || "0";
    $scope.changeTimer = function () {
        $localStorage.selectedTimer = $scope.selectedTimer;
    };
    // --------------------------------------------------
    // Timers
    $scope.timer1 = 0;
    $scope.minute1 = 1;
    $scope.runtimer1 = false;
    $scope.deactivate1 = false;
    $scope.timer2 = 30;
    $scope.minute2 = 1;
    $scope.runtimer2 = false;
    $scope.deactivate2 = false;
    // --------------------------------------------------
    // Randomize
    $scope.myFunction = function () {
        $scope.spinning = true;
        $scope.delay = (Math.floor((Math.random() * 3)) + 3) * 1000;
        $scope.result0 = "Randomizing";
        $scope.result1 = "隨機";
        $scope.result2 = "随机";
        $timeout(function () {
            $scope.rand = Math.floor((Math.random() * $scope.list.length) + 1) - 1;
            if ($scope.randomizerRadio == "st") {
                $scope.result0 = "We'll start with " + $scope.list[$scope.rand][0] + ".";
                $scope.result1 = "讓" + $scope.list[$scope.rand][0] + "先唸。";
                $scope.result2 = "让" + $scope.list[$scope.rand][0] + "先念。";
                $scope.spinning = false;
            } else {
                $scope.result0 = $scope.list[$scope.rand][0] + " will pray for us.";
                $scope.result1 = $scope.list[$scope.rand][0] + "會祈禱。";
                $scope.result2 = $scope.list[$scope.rand][0] + "会祈祷。";
                $scope.spinning = false;
            }
        }, $scope.delay);
    };
    $scope.addIt = function () { // add a person to the list
		$scope.list.push( [$scope.name] );
        $scope.name = "";
        $localStorage.mylist = $scope.list
        if ($scope.list.length == 1) {
            $scope.textListNotready();
        } else {
            $scope.textListReady();
        }
    };
    $scope.removeItem = function (x) { // remove a person from the list
        $scope.list.splice(x, 1);
        $localStorage.mylist = $scope.list;
        $scope.changemode();
		$scope.noCounselors = [];
    };
    $scope.changemode = function (x) { // change randomizer mode
		$localStorage.randomizerRadio = $scope.randomizerRadio;
        if ($scope.list.length == 1) {
            $scope.textListNotready();
        } else if ($scope.list.length == 0) {
            $scope.textListEmpty();
        } else {
            $scope.textListReady();
        }
    };
	$scope.sortNames = function () { // sort names
		$scope.noCounselors = [];
		for (var i=0; i < $scope.list.length; i++) {
			$scope.noCounselors.push($scope.list[i][0]);
		}
		$scope.noCounselors.sort(function(a, b){return 0.5 - Math.random()});
	};
    $scope.resetThis = function () { // reset everything
        $scope.list = [];
		$scope.noCounselors = [];
        $scope.name = "";
        $localStorage.mylist = [];
        $scope.textListEmpty();
    };
    $scope.countdown1 = function () {
        if (!$scope.runtimer1) {
            $scope.runtimer1 = true;
            $scope.countdown1();
        } else {
            $timeout(function () {
                if ($scope.timer1 == 0) {
                    if ($scope.minute1 != 0) {
                        $scope.minute1 -= 1;
                        $scope.timer1 = 59;
                        $scope.countdown1();
                    } else {
                        $scope.runtimer1 = false;
                        $scope.minute1 = 1;
                        if ($scope.selectedLanguage == "1") {
                            $window.alert("時間到了");
                        } else if ($scope.selectedLanguage == "2") {
                            $window.alert("时间到了");
                        } else {
                            $window.alert("Time's up");
                        }
                    }
                } else if ($scope.deactivate1) {
                    $timeout.cancel();
                    $scope.runtimer1 = false;
                    $scope.timer1 = 0;
                    $scope.minute1 = 1;
                    $scope.deactivate1 = false;
                } else {
                    $scope.timer1 -= 1;
                    $scope.countdown1();
                }
            }, 1000);
        }
    };
    $scope.endcountdown1 = function () {
        $scope.deactivate1 = true;
    };
    $scope.countdown2 = function () {
        if (!$scope.runtimer2) {
            $scope.runtimer2 = true;
            $scope.countdown2();
        } else {
            $timeout(function () {
                if ($scope.timer2 == 0) {
                    if ($scope.minute2 != 0) {
                        $scope.minute2 -= 1;
                        $scope.timer2 = 59;
                        $scope.countdown2();
                    } else {
                        $scope.runtimer2 = false;
                        $scope.minute2 = 1;
                        $scope.timer2 = 30;
                        if ($scope.selectedLanguage == "1") {
							$scope.randint = Math.floor((Math.random() * $scope.prayerTimerCH_TR.length) + 1) - 1;
                            $window.alert($scope.prayerTimerCH_TR[$scope.randint]);
                        } else if ($scope.selectedLanguage == "2") {
							$scope.randint = Math.floor((Math.random() * $scope.prayerTimerCH_SP.length) + 1) - 1;
                            $window.alert($scope.prayerTimerCH_SP[$scope.randint]);
                        } else {
							$scope.randint = Math.floor((Math.random() * $scope.prayerTimerEN_US.length) + 1) - 1;
                            $window.alert($scope.prayerTimerEN_US[$scope.randint]);
                        }
                    }
                } else if ($scope.deactivate2) {
                    $timeout.cancel();
                    $scope.runtimer2 = false;
                    $scope.minute2 = 1;
                    $scope.timer2 = 30;
                    $scope.deactivate2 = false;
                } else {
                    $scope.timer2 -= 1;
                    $scope.countdown2();
                }
            }, 1000);
        }
    };
    $scope.endcountdown2 = function () {
        $scope.deactivate2 = true;
    };
});
