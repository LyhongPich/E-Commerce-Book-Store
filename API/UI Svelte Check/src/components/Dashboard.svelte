<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto'

    // Initialize data for graph
    let xValues = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let yValues = [5, 10, 7, 5, 3, 15, 2];

    let ctx;

    // Create graph function
    function createChart() {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [
                    {
                        label: 'Visitors',
                        data: yValues,
                        borderWidth: 2,
                        fill: true,
                    }
                ]
            }
        })
    }
    
    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    let currentMonthIndex = new Date().getMonth(); // get the index of the current month
    let currentMonth = month[currentMonthIndex]; // get current month
    let currentYear = new Date().getFullYear(); // get current year
    
    function toPreviousMonth() {
        let newIndex = currentMonthIndex - 1;
        if (newIndex < 0) {
            newIndex += 12;
        }
        currentMonthIndex = newIndex;
        currentMonth = month[newIndex];
        sessionStorage.setItem('month', newIndex);
    }

    function toNextMonth() {
        let newIndex = currentMonthIndex + 1;
        if (newIndex > 11) {
            newIndex -= 12;
        }
        currentMonthIndex = newIndex;
        currentMonth = month[newIndex];
        sessionStorage.setItem('month', newIndex);
    }

    function toPreviousYear() {
        if(currentYear > 2023) {
            let prev = currentYear - 1;
            currentYear = prev;
            sessionStorage.setItem('year', prev);
        }
        else {
            alert("Data start from 2023")
        }
    }

    function toNextYear() {
        let next = currentYear + 1;
        currentYear = next;
        sessionStorage.setItem('year', next);
    }
    
    let cx = 50;
    let cy = 50;
    let r = 50;
    let borderColor = '#A4A2A2';
    let borderWidth = 1;

    onMount(() => {

        createChart();
        const storedMonthIndex = sessionStorage.getItem('month');
        const storedYear = sessionStorage.getItem('year');
        console.log("Month index from storage: "+storedMonthIndex);
        console.log("Year from storage: "+storedYear);

        if(storedMonthIndex !== null) {
            currentMonthIndex = parseInt(storedMonthIndex);
            currentMonth = month[currentMonthIndex];
        }
        if(storedYear !== null) {
            currentYear = parseInt(storedYear);
        }
    })

</script>

<div class="h-[647px] bg-stone-100 flex justify-between px-[51px] items-center">
    <div class="w-[65%] h-[545px]">
        <div class="flex items-center justify-between ">
            <div class="text-[1.875rem]">
                <span>Dashboard</span>
            </div>
            <div class="flex items-center text-[1.5rem] w-[245px] justify-between">
                <div class="bg-white w-[110px] h-[29px] flex justify-between px-[10px] items-center rounded-[10px]">
                    <button on:click={toPreviousMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                            <path d="M1 5.73684L8 10L8 1L1 5.73684Z" fill="black" stroke="black"/>
                        </svg>
                    </button>
                    <span>{currentMonth}</span>
                    <button on:click={toNextMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                            <path d="M8 5.26316L1 1V10L8 5.26316Z" fill="black" stroke="black"/>
                        </svg>
                    </button>
                </div>
                <div class="bg-white rounded-[10px] w-[110px] h-[29px] flex justify-between px-[10px] items-center">
                    <button on:click={toPreviousYear}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                            <path d="M1 5.73684L8 10L8 1L1 5.73684Z" fill="black" stroke="black"/>
                        </svg>
                    </button>
                    <span>{currentYear}</span>
                    <button on:click={toNextYear}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
                            <path d="M8 5.26316L1 1V10L8 5.26316Z" fill="black" stroke="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <canvas bind:this={ctx} class="w-full" height="510"></canvas>

    </div>
    <div class="w-[22%] h-[545px] flex flex-col justify-between">
        <div class="h-[205px] bg-white rounded-[15px] flex flex-col justify-center items-center gap-5">
            <div class="text-[1.5rem]">
                <span>New Client Today</span>
            </div>
            <div class="text-[2.25rem]">
                <svg class="w-[100px] h-[100px]">
                    <circle {cx} {cy} {r} fill="#D9D9D9" stroke={borderColor} stroke-width={borderWidth}/>
                    <text x={cx} y={cy} text-anchor="middle" alignment-baseline="central" fill="#676464">10</text>
                </svg>
            </div>
        </div>
        <div class="h-[205px] bg-white rounded-[15px] flex flex-col items-center">
            <div class="text-[1.5rem]">
                <span>Most applications</span>
            </div>
        </div>
    </div>
</div>
