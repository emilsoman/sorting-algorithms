$("#btReset").click(function() {
        $(".button").removeClass("disable");
        reset();
});

$("#btBubble").click(function() {
        $(".button").addClass("disable");
        if (!resetted) reset();
        bubble.sort(data);
});

$("#btInser").click(function() {
        $(".button").addClass("disable");
        if (!resetted) reset();
        insertionsort.sort(data);
});

$("#btSelec").click(function() {
        $(".button").addClass("disable");
        if (!resetted) reset();
        selectionsort.sort(data);
});

$("#btHeap").click(function() {
        $(".button").addClass("disable");
        if (!resetted) reset();
        heap.sort(data);
});

$("#btQuick").click(function() {
        $(".button").addClass("disable");
        if (!resetted) reset();
        quick.sort(data);
});

// Array to be sorted
var data = new Array();
var resetted = false;

// Generate array of rundom number and reset panel
function reset() {
    for (i=0; i<50; ++i) {
        data[i] = ~~(i*160/50);
    }
    for (i=data.length-1; i>=0; --i) {
        var ridx = ~~( Math.random() * ( data.length ) );
        data.swap(i, ridx);
    }
    var tb = $("#sortPanel");
    tb.empty();
    var tr = $("<tr></tr>");
    for (i=0; i<data.length; ++i) {
        tr.append("<td  id='b"+i+"'>" +
                  "<div class='cc' style='height: "+data[i]+"px;'>" +
                  "</div></td>");
    }
    tb.append(tr);
    resetted = true;
}

//
// Functions queue (for visualization)
//
var wrapFunction = function(fn, context, params) {
    return function() {
        fn.apply(context, params);
    };
}

var funqueue = [];

function swapS(a, b) {
    var ca = $("#b"+a).children("div");
    var cb = $("#b"+b).children("div");
    ca.removeClass("cc").addClass("ccH1");
    cb.removeClass("cc").addClass("ccH2");
}

function swapP(a, b) {
    var ca = $("#b"+a).children("div");
    var cb = $("#b"+b).children("div");
    $("#b"+a).empty().append(cb);
    $("#b"+b).empty().append(ca);
}

function swapU(a, b) {
    var ca = $("#b"+a).children("div");
    var cb = $("#b"+b).children("div");
    ca.removeClass("ccH2").addClass("cc");
    cb.removeClass("ccH1").addClass("cc");
}

var memV;
function push(a) {
    memV = $("#b"+a).children("div");
}

function pop(a) {
    $("#b"+a).empty().append(memV)
}

function moveP(a, b) {
    var ca = $("#b"+a).children("div");
    $("#b"+b).empty().append(ca);
}

function pushSwap(a, b) {
    var fun1 = wrapFunction(swapS, this, [a, b]);
    var fun2 = wrapFunction(swapP, this, [a, b]);
    var fun3 = wrapFunction(swapU, this, [a, b]);
    funqueue.push(fun1);
    funqueue.push(fun2);
    funqueue.push(fun3);
}

var intQueue;

function runQueue() 
{
    if (funqueue.length > 0) {
        (funqueue.shift())();
    } else {
        clearInterval(intQueue);
        $(".button").removeClass("disable");
        resetted = false;
    }
}
//
// Functions queue end
//

//
// Array extension for values swapping
//
Array.prototype.swap = function(a, b) {
    var t = this[a];
    this[a] = this[b];
    this[b] = t;
}

//
// Array extension for values swapping with display
//
Array.prototype.swapVerbose = function(a, b) {
    pushSwap(a, b);
    this.swap(a, b);
}

//
// Bubble sort
//
var bubble = {
    a: null,
    sort: function(arr) {
        intQueue = setInterval(function(){runQueue()},0);
        this.a = arr.slice();;
        for (i = this.a.length; i > 0; i--)
        {
            if (this.a[i] < this.a[i-1])
            {
            this.a.swapVerbose(i-1, i);
            i = this.a.length;
            }
        }
        return this.a;
    }
}

//
// Insertion sort
//
var insertionsort = {
        a: null,
        sort: function(arr) {
            this.a = arr.slice();
            intQueue = setInterval(function(){runQueue()},0);
            var j, v;
            for (var i = 1; i < this.a.length; i++) {
                j = i;
                funqueue.push(wrapFunction(swapS, this, [i, i]));
                funqueue.push(wrapFunction(push, this, [i]));
                v = this.a[i];
                while ((this.a[j-1] > v) && (j > 0)) {
                    funqueue.push(wrapFunction(swapS, this, [j-1, j-1]));
                    funqueue.push(wrapFunction(moveP, this, [j-1, j]));
                    funqueue.push(wrapFunction(swapU, this, [j, j]));
                    this.a[j] = this.a[j-1];
                    j--;
                }
                funqueue.push(wrapFunction(pop, this, [j]));
                funqueue.push(wrapFunction(swapU, this, [j, j]));
                this.a[j]=v;
            }
            return this.a;            
        }
}

//
// Selection sort
//
var selectionsort = {
   a: null,
   sort: function(arr) {
        this.a = arr.slice();
        intQueue = setInterval(function(){runQueue()},0);
        for (var i = this.a.length-1; i >0;  i--)
        {
            max = i;
            for (var j = 0; j < i; j++)
            {
                if (this.a[j] > this.a[max])
                    max = j;
            }
            this.a.swapVerbose(i, max);
        }
   }
}

//
// Quick sort
//
var quick = {
    a: null,
    sort: function(arr) {
        intQueue = setInterval(function(){runQueue()},0);
    this.a = arr.slice();
    this.qsort(0, this.a.length-1);
    return this.a;
    
    },
    part: function(p, r) {
    var v = this.a[p];
    var i = p;
    var j = r;
    while (true) {
        while (this.a[j] > v) j--;
        while (this.a[i] < v) i++;
        if (i < j)
        {
        this.a.swapVerbose(i, j);
        i++;
        j -= 1;
        } else { 
        return j;
        }
    }
    },
    qsort: function(p, r) {
    if (p < r)
    {
        var q = this.part(p, r);
        this.qsort(p, q);
        this.qsort(q+1, r);
    }
    }
}

//
// Heap sort
//
var heap = {
    n: 0,
    a: null,
    shiftDown: function (l, i) {
        var k = i;
        var j = -1;
        while (j != k) {
            j = k;
            j2  = 2*j;
            j21 = 2*j+1;
            if (j2 < l && this.a[j2] > this.a[k])
                k = j2;
            if (j21 < l && this.a[j21] > this.a[k])
                k = j21;
            this.a.swapVerbose(j, k);
        }
    },
    sort: function (arr) {
        intQueue = setInterval(function(){runQueue()},0);
        this.a = arr.slice();
        this.n = this.a.length-1;

        // build heap
        for (var i = ~~(this.n/2); i >= 0; i--) {
            this.shiftDown(this.n, i);
        }
        // sort heap
        for (var i = this.n; i > 0; i--) {
            this.a.swapVerbose(0, i);
            this.shiftDown(i-1, 0);
        }
        if (this.a[0] > this.a[1])
            this.a.swapVerbose(0, 1);
        return this.a;
    }
}

reset();
