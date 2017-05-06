/**
 * Created by kotpl on 11/27/2016.
 */
var memberCount=0;

window.onload=init();

function init()
{
    document.getElementById("btn_add").addEventListener("click",addMember,false);
    addMember();
    document.getElementById("styleSet").addEventListener("click",changeStyle,false);
    document.getElementById("form").addEventListener("submit",submitForm,false);
    document.getElementById("form").addEventListener("reset",resetForm,false);
}

function addMember() {
    if(memberCount<5) {
        memberCount = memberCount + 1;
        var formParent = document.getElementById("form");
        var formDiv = document.createElement("div");
        formDiv.id = "member" + memberCount;
        formDiv.className = "member";
        formDiv.addEventListener("click", removeMember, false);

        var secHead = document.createElement("h3");
        secHead.id="header"+memberCount;
        secHead.appendChild(document.createTextNode("Uczęstnik " + memberCount));
        formDiv.appendChild(secHead);


        var p;
        var label;
        var input;
        var hint;

        p = document.createElement("p");
        formDiv.appendChild(p);

        label = document.createElement("label");
        label.appendChild(document.createTextNode("Login "));
        p.appendChild(label);

        input = document.createElement("input");
        input.name = "login" + memberCount;
        input.type = "text";
        input.size = "20";
        input.required = true;
        input.addEventListener("focus",showHint,false);
        input.addEventListener("blur",hideHint,false);
        p.appendChild(input);

        hint=document.createElement("em");
        hint.innerHTML=" od 6 do 20 znaków"
        hint.className="hint";
        hint.id="lhint"+memberCount;
        p.appendChild(hint);

        p = document.createElement("p");
        formDiv.appendChild(p);

        label = document.createElement("label");
        label.appendChild(document.createTextNode("Hasło "));
        p.appendChild(label);

        input = document.createElement("input");
        input.name = "pass" + memberCount;
        input.type = "text";
        input.size = "20";
        input.required = true;
        input.addEventListener("focus",showHint,false);
        input.addEventListener("blur",hideHint,false);
        p.appendChild(input);

        hint=document.createElement("em");
        hint.innerHTML=" od 6 do 20 znaków"
        hint.className="hint";
        hint.id="phint"+memberCount;
        p.appendChild(hint);

        p = document.createElement("p");
        formDiv.appendChild(p);

        label = document.createElement("label");
        label.appendChild(document.createTextNode("E-mail "));
        p.appendChild(label);

        input = document.createElement("input");
        input.name = "email" + memberCount;
        input.type = "email";
        input.size = "20";
        input.required = true;
        input.addEventListener("focus",showHint,false);
        input.addEventListener("blur",hideHint,false);
        p.appendChild(input);

        hint=document.createElement("em");
        hint.innerHTML=" example@mail.com"
        hint.className="hint";
        hint.id="ehint"+memberCount;
        p.appendChild(hint);


        formParent.insertBefore(formDiv, document.getElementById("add"));
    }
}

function removeMember(e)
{
    var formParent=document.getElementById("form");
    if( memberCount>1 && e.altKey)
    {
        formParent.removeChild(this);
        renumberMembers();
        memberCount=memberCount-1;
    }
    else
    {
        if(e.ctrlKey)
        {
            var index=this.id.replace('member','');
            document.getElementsByName("login"+index)[0].value="";
            document.getElementsByName("pass"+index)[0].value="";
            document.getElementsByName("email"+index)[0].value="";
        }
    }
}

function renumberMembers()
{
    var offset=0;
    var i;
    for(i=1;i<=memberCount;i=i+1)
    {
        if(document.getElementById("member"+i)==null)
        {
            offset=-1;
        }
        else
        {
            document.getElementById("member"+i).id="member"+(i+offset);
            document.getElementById("header"+i).innerHTML="Uczęstnik "+(i+offset);
            document.getElementById("header"+i).id="header"+(i+offset);
            document.getElementsByName("login"+i)[0].name="login"+(i+offset);
            document.getElementsByName("pass"+i)[0].name="pass"+(i+offset);
            document.getElementsByName("email"+i)[0].name="email"+(i+offset);
        }
    }
}
function showHint(e) {

    switch (e.target.name.charAt(0))
    {
        case 'e':
            var index=this.name.replace('email','');
            document.getElementById("ehint"+index).style.visibility="visible";
            break;
        case 'l':
            var index=this.name.replace('login','');
            document.getElementById("lhint"+index).style.visibility="visible";
            break;
        case 'p':
            var index=this.name.replace('pass','');
            document.getElementById("phint"+index).style.visibility="visible";
            break;
        default:
            break;
    }
    e.cancelBubble=true;
}
function hideHint(e) {
    var index=this.id.replace('member','');
    switch (e.target.name.charAt(0))
    {
        case 'e':
            var index=this.name.replace('email','');
            document.getElementById("ehint"+index).style.visibility="hidden";
            break;
        case 'l':
            var index=this.name.replace('login','');
            document.getElementById("lhint"+index).style.visibility="hidden";
            break;
        case 'p':
            var index=this.name.replace('pass','');
            document.getElementById("phint"+index).style.visibility="hidden";
            break;
        default:
            break;
    }
    e.cancelBubble=true;
}

function changeStyle(e)
{
    document.body.style.backgroundColor=document.getElementById("bgCol").value;
    document.body.style.color=document.getElementById("txtCol").value;
    document.body.style.fontFamily=document.getElementById("txtFont").value;
}
function submitForm(e) {
    e.returnValue=confirm("Czy napewno chcesz zarejestrować zespół");
}
function resetForm(e){
    e.returnValue=confirm("Czy napewno chcesz zresetować formulaż");
}

