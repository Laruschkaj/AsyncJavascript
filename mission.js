// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
	oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
	oneTimeTasks.forEach(task => {
		setTimeout(task.func, task.delay);
	});
}

// Task 4: Start Monitoring Function
function startMonitoring() {
	monitoringTaskId = setInterval(() => {
		console.log("🔍 Monitoring space station conditions...");
	}, 2000); // every 2 seconds
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
	clearInterval(monitoringTaskId);
	console.log("🛑 Stopped monitoring.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
	let timeLeft = duration;
	const countdownId = setInterval(() => {
		if (timeLeft > 0) {
			console.log(`⏳ Countdown: ${timeLeft} seconds remaining...`);
			timeLeft--;
		} else {
			clearInterval(countdownId);
			console.log("🚀 Liftoff!");
		}
	}, 1000); // every 1 second
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
	// Add one-time tasks
	addOneTimeTask(() => console.log("✅ Pre-launch system check complete."), 1000);
	addOneTimeTask(startMonitoring, 2000);
	addOneTimeTask(stopMonitoring, 7000);
	addOneTimeTask(() => startCountdown(5), 8000);

	// Run all scheduled one-time tasks
	runOneTimeTasks();
}

scheduleMission(); // Starts the mission
