document.querySelector(".learn_more_btn").addEventListener("click", (_) => {
	document.querySelector(".hero_section").classList.remove("active");
	document.querySelector(".demo_section").classList.add("active");
	document.querySelector(".close_about_section").classList.add("active");
});

document
	.querySelector(".close_about_section")
	.addEventListener("click", (_) => {
		document.querySelector(".hero_section").classList.add("active");
		document.querySelector(".demo_section").classList.remove("active");
		document.querySelector(".close_about_section").classList.remove("active");
	});

// Features display
document.querySelectorAll(".about_features .features_list li").forEach((fes) =>
	fes.addEventListener("click", (_) => {
		document.querySelector(".features_detailes").classList.add("active");
		document
			.querySelector(`.fes.${fes.getAttribute("feature_window")}`)
			.classList.add("active");
	})
);

// Remove features display
document
	.querySelector(".features_detailes .cls_fes_det_win")
	.addEventListener("click", (_) => {
		document.querySelector(".features_detailes").classList.remove("active");
		document.querySelector(".fes.active")?.classList.remove("active");
	});

// Code
document.querySelector(".rev_code").addEventListener("click", (_) => {
	let a = document.createElement("a");
	a.href = "https://github.com/Mahmoud46/Pixel_computer_Vison_final_project";
	a.target = "_blank";
	a.click();
});

// Paper
document.querySelector(".download_paper").addEventListener("click", (_) => {
	let a = document.createElement("a");
	a.href = "./static/pdf/Pixel Final Report.pdf";
	a.download =
		"Computer Vision Course Project - Report - Application of Computer Vision Tools.pdf";
	a.click();
});
