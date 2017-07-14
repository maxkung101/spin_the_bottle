/* JavaScript Document */
var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope, $timeout, $window) {
    // Languages
    $scope.selectedLanguage = "0";
    // >> Bar
    $scope.attendance = function (test) {
        switch (test) {
            case "1":
                return "出席名單";
            case "2":
                return "出席名单";
            default:
                return "Attendance";
        }
    }
    $scope.qa = function (test) {
        switch (test) {
            case "1":
                return "QA 計時器";
            case "2":
                return "QA 计时器";
            default:
                return "QA timer";
        }
    }
    $scope.closingtime = function (test) {
        switch (test) {
            case "1":
                return "關閉";
            case "2":
                return "关闭";
            default:
                return "Closing time";
        }
    }
    $scope.prayer = function (test) {
        switch (test) {
            case "1":
                return "祷告計時器";
            case "2":
                return "祷告计时器";
            default:
                return "Prayer timer";
        }
    }
    $scope.settings = function (test) {
        switch (test) {
            case "1":
                return "定";
            case "2":
                return "定";
            default:
                return "Settings";
        }
    }
    // >> Attendance page
    $scope.nameplace = function (test) {
        switch (test) {
            case "1":
                return "名字";
            case "2":
                return "名字";
            default:
                return "Name";
        }
    }
    $scope.add = function (test) {
        switch (test) {
            case "1":
                return "加";
            case "2":
                return "加";
            default:
                return "Add";
        }
    }
    $scope.clear = function (test) {
        switch (test) {
            case "1":
                return "擦寫";
            case "2":
                return "擦写";
            default:
                return "Clear";
        }
    }
    $scope.listof = function (test) {
        switch (test) {
            case "1":
                return "小組成員名單";
            case "2":
                return "小组成员名单";
            default:
                return "List of group members";
        }
    }
    $scope.totalcount = function (test) {
        switch (test) {
            case "1":
                return "總金額";
            case "2":
                return "总金额";
            default:
                return "Total count";
        }
    }
    // >> Timer pages
    $scope.startbutton = function (test) {
        switch (test) {
            case "1":
                return "開始";
            case "2":
                return "开始";
            default:
                return "Start";
        }
    }
    $scope.stopbutton = function (test) {
        switch (test) {
            case "1":
                return "停止";
            case "2":
                return "停止";
            default:
                return "Stop";
        }
    }
    // >> Closing time page
    $scope.whoshall = function (test) {
        switch (test) {
            case "1":
                return "是誰要幫我們祈禱";
            case "2":
                return "是谁要帮我们祈祷";
            default:
                return "Who shall pray for us";
        }
    }
    $scope.gobutton = function (test) {
        switch (test) {
            case "1":
                return "GO";
            case "2":
                return "GO";
            default:
                return "Go";
        }
    }
    // >> Settings page
    $scope.language = function (test) {
        switch (test) {
            case "1":
                return "語言";
            case "2":
                return "语言";
            default:
                return "Language";
        }
    }
    $scope.about = function (test) {
        switch (test) {
            case "1":
                return "關於";
            case "2":
                return "关于";
            default:
                return "About";
        }
    }
    $scope.close = function (test) {
        switch (test) {
            case "1":
                return "關";
            case "2":
                return "关";
            default:
                return "Close";
        }
    }
    // --------------------------------------------------
    // Init
    $scope.spinning = false;
    $scope.list = [];
    $scope.result0 = "Please take attendance first.";
    $scope.result1 = "請先出席。";
    $scope.result2 = "请先出席。";
    // --------------------------------------------------
    // Timers
    $scope.timer1 = 30;
    $scope.runtimer1 = false;
    $scope.deactivate1 = false;
    $scope.timer2 = 60;
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
            $scope.result0 = $scope.list[$scope.rand] + " will pray for us.";
            $scope.result1 = $scope.list[$scope.rand] + " 會祈禱。";
            $scope.result2 = $scope.list[$scope.rand] + " 会祈祷。";
            $scope.spinning = false;
        }, $scope.delay);
    }
    $scope.addIt = function () { // add a person to the list
        $scope.list.push($scope.name);
        $scope.name = "";
        if ($scope.list.length == 1) {
            $scope.result0 = "Not enough people. Please add more.";
            $scope.result1 = "請添加更多的人。";
            $scope.result2 = "请添加更多的人。";
        } else if ($scope.list.length == 2) {
            $scope.result0 = "When you're ready, press \"Go\" to begin.";
            $scope.result1 = "準備好後，按\"GO\"開始。";
            $scope.result2 = "准备好后，按\"GO\"开始。";
        }
    }
    $scope.reset = function () { // reset everything
        $scope.list = [];
        $scope.name = "";
        $scope.result0 = "Please take attendance first.";
        $scope.result1 = "請先出席。";
        $scope.result2 = "请先出席。";
    }
    $scope.countdown1 = function () {
        if (!$scope.runtimer1) {
            $scope.runtimer1 = true;
            $scope.countdown1();
        } else {
            $timeout(function () {
                if ($scope.timer1 == 0) {
                    $scope.runtimer1 = false;
                    $scope.timer1 = 30;
                    if ($scope.selectedLanguage == "1") {
                        $window.alert("時間到了");
                    } else if ($scope.selectedLanguage == "2") {
                        $window.alert("时间到了");
                    }
                    else {
                        $window.alert("Time's up");
                    }
                } else if ($scope.deactivate1) {
                    $timeout.cancel();
                    $scope.runtimer1 = false;
                    $scope.timer1 = 30;
                    $scope.deactivate1 = false;
                } else {
                    $scope.timer1 -= 1;
                    $scope.countdown1();
                }
            }, 1000);
        }
    }
    $scope.endcountdown1 = function () {
        $scope.deactivate1 = true;
    }
    $scope.countdown2 = function () {
        if (!$scope.runtimer2) {
            $scope.runtimer2 = true;
            $scope.countdown2();
        } else {
            $timeout(function () {
                if ($scope.timer2 == 0) {
                    $scope.runtimer2 = false;
                    $scope.timer2 = 60;
                    if ($scope.selectedLanguage == "1") {
                        $window.alert("時間到了");
                    } else if ($scope.selectedLanguage == "2") {
                        $window.alert("时间到了");
                    }
                    else {
                        $window.alert("Time's up");
                    }
                } else if ($scope.deactivate2) {
                    $timeout.cancel();
                    $scope.runtimer2 = false;
                    $scope.timer2 = 60;
                    $scope.deactivate2 = false;
                } else {
                    $scope.timer2 -= 1;
                    $scope.countdown2();
                }
            }, 1000);
        }
    }
    $scope.endcountdown2 = function () {
        $scope.deactivate2 = true;
    }
});