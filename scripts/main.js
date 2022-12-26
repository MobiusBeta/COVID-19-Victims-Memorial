/* JavaScript written by Ruoxin Mao */
const version = "22w52a";
const splashScreen = 1;
console.log("\n纪念所有在这些苦难中逝去的生命\n\n© 2022 毛若昕\nversion " + version + "\n\n");
window.oncontextmenu = () => { return false; };
window.onkeydown = e => { if ((e.ctrlKey || e.metaKey) && e.keyCode == 83) return false; };
loadList("name");
if (splashScreen === 1) {
	setTimeout(() => {
		splashScr.style.opacity = "0";
		setTimeout(() => {
			splashScr.remove();
		}, 500);
	}, 3500);
} else {
	splashScr.remove();
}
if (matchMedia("(prefers-color-scheme:dark)").matches) {
	document.querySelector('link[rel="shortcut icon"]').href = "favicon-dark-theme.ico";
}
btnScrollDown.onclick = () => {
	window.scrollTo({ 
		top: mainContainer.offsetTop, 
		behavior: "smooth" 
	});
}
btnBacktoTop.onclick = () => {
	window.scrollTo({ 
		top: 0, 
		behavior: "smooth" 
	});
}
selectListSort.onchange = () => {
	loadList(selectListSort.value);
}
function loadList(key) {
	listItemsContainer.innerHTML = "";
	const url = "https://ncov19.cn/lists/medical-death-list.json";
	fetch(url).then(response => {
		if (response.ok) {
			return response.json();
		}
	}).then(data => {
		txtTotalDeath.innerText = data.length + "位";
		data.sort((a, b) => a[key].localeCompare(b[key]));
		for (let i = 0; i < data.length; i++) {
			const newListItem = document.createElement("div");
			const newListName = document.createElement("div");
			const newDiv = document.createElement("div");
			const newListInnerItem1 = document.createElement("div");
			const newListInnerItemTitle1 = document.createElement("div");
			const newListInnerItemContent1 = document.createElement("div");
			const newListInnerItem2 = document.createElement("div");
			const newListInnerItemTitle2 = document.createElement("div");
			const newListInnerItemContent2 = document.createElement("div");
			const newListInnerItem3 = document.createElement("div");
			const newListInnerItemTitle3 = document.createElement("div");
			const newListInnerItemContent3 = document.createElement("div");
			const newListInnerItem4 = document.createElement("div");
			const newListInnerItemTitle4 = document.createElement("div");
			const newListInnerItemContent4 = document.createElement("div");
			const newListInnerItem5 = document.createElement("div");
			const newListInnerItemTitle5 = document.createElement("div");
			const newListInnerItemContent5 = document.createElement("div");
			const newListInnerItem6 = document.createElement("div");
			const newListInnerItemTitle6 = document.createElement("div");
			const newListInnerItemContent6 = document.createElement("div");
			const newListInnerItem7 = document.createElement("div");
			const newListInnerItemTitle7 = document.createElement("div");
			const newListInnerItemContent7 = document.createElement("div");
			newListItem.classList.add("listItem");
			newListName.classList.add("listName");
			newListName.classList.add("bold");
			newListInnerItem1.classList.add("listInnerItem");
			newListInnerItemTitle1.classList.add("listInnerItemTitle");
			newListInnerItemContent1.classList.add("listInnerItemContent");
			newListInnerItem2.classList.add("listInnerItem");
			newListInnerItemTitle2.classList.add("listInnerItemTitle");
			newListInnerItemContent2.classList.add("listInnerItemContent");
			newListInnerItem3.classList.add("listInnerItem");
			newListInnerItemTitle3.classList.add("listInnerItemTitle");
			newListInnerItemContent3.classList.add("listInnerItemContent");
			newListInnerItem4.classList.add("listInnerItem");
			newListInnerItemTitle4.classList.add("listInnerItemTitle");
			newListInnerItemContent4.classList.add("listInnerItemContent");
			newListInnerItem5.classList.add("listInnerItem");
			newListInnerItemTitle5.classList.add("listInnerItemTitle");
			newListInnerItemContent5.classList.add("listInnerItemContent");
			newListInnerItem6.classList.add("listInnerItem");
			newListInnerItemTitle6.classList.add("listInnerItemTitle");
			newListInnerItemContent6.classList.add("listInnerItemContent");
			newListInnerItem7.classList.add("listInnerItem");
			newListInnerItemTitle7.classList.add("listInnerItemTitle");
			newListInnerItemContent7.classList.add("listInnerItemContent");
			newListName.innerText = data[i].name;
			newListInnerItemTitle1.innerText = "性别";
			newListInnerItemTitle2.innerText = "年龄";
			newListInnerItemTitle3.innerText = "职务";
			newListInnerItemTitle4.innerText = "身份";
			newListInnerItemTitle5.innerText = "所在地";
			newListInnerItemTitle6.innerText = "牺牲原因";
			newListInnerItemTitle7.innerText = "牺牲时间";
			newListInnerItemContent1.innerText = data[i].gender;
			newListInnerItemContent2.innerText = data[i].age;
			newListInnerItemContent3.innerText = data[i].occupation;
			newListInnerItemContent4.innerText = data[i].political_identity;
			newListInnerItemContent5.innerText = data[i].location;
			newListInnerItemContent6.innerText = data[i].cause_of_death;
			newListInnerItemContent7.innerText = data[i].date;
			newListInnerItem1.appendChild(newListInnerItemTitle1);
			newListInnerItem1.appendChild(newListInnerItemContent1);
			newListInnerItem2.appendChild(newListInnerItemTitle2);
			newListInnerItem2.appendChild(newListInnerItemContent2);
			newListInnerItem3.appendChild(newListInnerItemTitle3);
			newListInnerItem3.appendChild(newListInnerItemContent3);
			newListInnerItem4.appendChild(newListInnerItemTitle4);
			newListInnerItem4.appendChild(newListInnerItemContent4);
			newListInnerItem5.appendChild(newListInnerItemTitle5);
			newListInnerItem5.appendChild(newListInnerItemContent5);
			newListInnerItem6.appendChild(newListInnerItemTitle6);
			newListInnerItem6.appendChild(newListInnerItemContent6);
			newListInnerItem7.appendChild(newListInnerItemTitle7);
			newListInnerItem7.appendChild(newListInnerItemContent7);
			newListItem.appendChild(newListName);
			newListItem.appendChild(newListInnerItem1);
			newListItem.appendChild(newListInnerItem2);
			newListItem.appendChild(newListInnerItem3);
			newListItem.appendChild(newListInnerItem4);
			newListItem.appendChild(newDiv);
			newListItem.appendChild(newListInnerItem5);
			newListItem.appendChild(newListInnerItem6);
			newListItem.appendChild(newListInnerItem7);
			listItemsContainer.appendChild(newListItem);
		}
	});
}