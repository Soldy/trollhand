# javascript TrollHand

## WELCOME HUMAN !!!

Thank you for visiting TrollHand!

## What is TrollHand

TrollHand Is a short hand collection for fun. \
Help to speed up the javascript development and shrink the code with an easy step and simple logic.\

!!!BECAREFULL!!!! \
!!!!ThrollHand is just a global const collection!!!! \
!!!!TROLLHAND NOT WORKING WELL WITH SOME THREESHAKERS!!!! \
The blackhole can recognise the TrollHand so that should be fine. \

# How to use it.

## Tag trolling.

| key | linked to                 | C.C | C.S | set | get |
|-----|---------------------------|-----|-----| ----| ----|
|  w  | window                    |  Y  |  N  |  -  |  -  |
|  q  | document                  |  Y  |  N  |  -  |  -  |
|  d  | document.getElementById   |  Y  |  N  |  -  |  -  |
|  c  | getElementsByClassName    |  Y  |  N  |  -  |  -  |
|  n  | getElementsByName         |  Y  |  N  |  -  |  -  |
|  t  | getElementsByTagName      |  Y  |  N  |  -  |  -  |
|  v  | value                     |  N  |  Y  |  Y  |  Y  |
|  i  | innerHtml                 |  N  |  Y  |  Y  |  Y  |
|  s  | style                     |  N  |  Y  |  Y  |  Y  |
|  r  | remove                    |  N  |  Y  |  Y  |  N  |
|  l  | length                    |  N  |  N  |  Y  |  Y  |

lower case for get 

upper case for set 

## object trolling.

| key | function                  | int | string |
|-----|---------------------------|-----|--------|
|  T  | toString                  |  Y  |    Y   |
|  F  | parseFloat                |  Y  |    Y   |
|  I  | parseInt                  |  Y  |    Y   |
|  P  | parseInt().toString()     |  Y  |    Y   |
|  R  | replace                   |  N  |    Y   |


# examples

## change element id (troll things first)

```javascript 
// <div id='first_id'></div>
    dD('first_id', 'second_id');
// result : <div id='second_id'></div>

```

## change element className

```javascript 
// <div id='element_id' class='some clasess here'></div>
    dC('element_id', 'new classes');
// result: <div id='element_id' class='new classes'></div>

```

## get element className

```javascript 
// <div id='element_id' class='some clasess here'></div>
    dc('element_id');
// return : 'some clasess here'

```


## get element innerHTML

```javascript 
// <div id='element_id'> cool html part</div>
    di('element_id');
// return : '2 cool html part'

```

## get element innerHTML with parseInt

```javascript 
// <div id='element_id'> cool html part</div>
    di('element_id').I();
// return : 2

```



## get element innerHTML with parseInt toString

```javascript 
// <div id='element_id'> cool html part</div>
    di('element_id').I().T();
// return : '2'

```

or

```javascript 
// <div id='element_id'> cool html part</div>
    di('element_id').P();
// return : '2'

```

## set element innerHTML 

```javascript 
// <div id='element_id'> cool html part</div>
    dI('element_id', ' VOW ');
// result :  <div id='element_id'> VOW </div>

```



# THANKS FOR ALL THE FISHES AND BYE FOR NOW 

If you find any issues, not working parts or some logic break please contact with me ASAP.
Thank you for all! LLAP!

Soldy

