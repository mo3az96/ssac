/* ----------------------------------------------------------------------------- 

  jQuery DateTimePicker - Responsive flat design jQuery DateTime Picker plugin for Web & Mobile
  Version 0.1.39
  Copyright (c)2014-2019 Lajpat Shah
  Contributors : https://github.com/nehakadam/DateTimePicker/contributors
  Repository : https://github.com/nehakadam/DateTimePicker
  Documentation : https://nehakadam.github.io/DateTimePicker

 ----------------------------------------------------------------------------- */

/*

	language: Arabic
	file: DateTimePicker-i18n-ar

*/

(function ($) {
    $.DateTimePicker.i18n["ar"] = $.extend($.DateTimePicker.i18n["ar"], {
        
    	language: "ar",

    	dateTimeFormat: "dd-MM-yyyy HH:mm",
		dateFormat: "dd-MM-yyyy",
		timeFormat: "HH:mm",

		shortDayNames: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
		fullDayNames: [
			"الأحد",
			"الاثنين",
			"الثلاثاء",
			"الأربعاء",
			"الخميس",
			"الجمعة",
			"السبت",
		],
		shortMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
		fullMonthNames: [
			"يناير",
			"فبراير",
			"مارس",
			"أبريل",
			"مايو",
			"يونيو",
			"يوليو",
			"أغسطس",
			"سبتمبر",
			"أكتوبر",
			"نوفمبر",
			"ديسمبر",
		],

		titleContentDate: "تاريخ الزيارة",
		titleContentTime: "موعد الزيارة",
		titleContentDateTime: "تعيين التاريخ والوقت",
	
		setButtonContent: "تم",
		clearButtonContent: "حذف"
        
    });
})(jQuery);