var score = 0;
function update() {
	document.getElementById("score").innerHTML = score+"/"+num;
	if(score == num){
		alert("Good Job!!!");
		document.getElementById("totallySecretTitle").innerHTML = songTitle;
		$("#secretKiller").css("visibility","hidden");
	}
}

function getSong(){
	var songs = [["Billy Joel - Piano Man","It's nine o'clock on a Saturday The regular crowd shuffles in There's an old man sitting next to me Making love to his tonic and gin He says, \"Son can you play me a memory I'm not really sure how it goes But it's sad and it's sweet And I knew it complete When I wore a younger man's clothes\" Sing us a song you're the piano man Sing us a song tonight Well we're all in the mood for a melody And you've got us feeling alright Now John at the bar is a friend of mine He gets me my drinks for free And he's quick with a joke or to light up your smoke But there's someplace that he'd rather be He says, \"Bill, I believe this is killing me\" As a smile ran away from his face \"Well, I'm sure that I could be a movie star If I could get out of this place\" Now Paul is a real estate novelist Who never had time for a wife And he's talking with Davy, who's still in the Navy And probably will be for life And the waitress is practicing politics As the businessmen slowly get stoned Yes they're sharing a drink they call loneliness But it's better than drinking alone Sing us a song you're the piano man Sing us a song tonight Well we're all in the mood for a melody And you've got us feeling alright It's a pretty good crowd for a Saturday And the manager gives me a smile 'Cause he knows that it's me they've been coming to see To forget about life for a while And the piano sounds like a carnival And the microphone smells like a beer And they sit at the bar and put bread in my jar And say \"Man what are you doing here?\" Sing us a song you're the piano man Well we're all in the mood for a melody And you've got us feeling alright"],
	["Kristen Bell - Do You Wanna Build A Snowman?", "Elsa? Do you wanna build a snowman? Come on lets go and play I never see you anymore Come out the door It's like you've gone away- We used to be best buddies And now we're not I wish you would tell me why!- Do you wanna build a snowman? It doesn't have to be a snowman. Go away, Anna Okay, bye... Do you wanna build a snowman? Or ride our bikes around the halls I think some company is overdue I've started talking to the pictures on the walls- Hang in there, Joan! It gets a little lonely All these empty rooms, Just watching the hours tick by- Tic-Tock, Tic-Tock, Tic-Tock, Tic-Tock, Tic-Tock Elsa? Please, I know you're in there, People are asking where you've been They say \"have courage\", and I'm trying to I'm right out here for you, just let me in We only have each other It's just you and me What are we gonna do? Do you wanna build a Snowman?"],
	["Francis Scott Key - The Star Spangled Banner","Oh, say can you see by the dawn's early light What so proudly we hailed at the twilight's last gleaming? Whose broad stripes and bright stars thru the perilous fight, O'er the ramparts we watched were so gallantly streaming? And the rocket's red glare, the bombs bursting in air, Gave proof through the night that our flag was still there. Oh, say does that star-spangled banner yet wave O'er the land of the free and the home of the brave? On the shore, dimly seen through the mists of the deep, Where the foe's haughty host in dread silence reposes, What is that which the breeze, o'er the towering steep, As it fitfully blows, half conceals, half discloses? Now it catches the gleam of the morning's first beam, In full glory reflected now shines in the stream: 'Tis the star-spangled banner! Oh long may it wave O'er the land of the free and the home of the brave! And where is that band who so vauntingly swore That the havoc of war and the battle's confusion, A home and a country should leave us no more! Their blood has washed out their foul footsteps' pollution. No refuge could save the hireling and slave From the terror of flight, or the gloom of the grave: And the star-spangled banner in triumph doth wave O'er the land of the free and the home of the brave! Oh! thus be it ever, when freemen shall stand Between their loved home and the war's desolation! Blest with victory and peace, may the heav'n rescued land Praise the Power that hath made and preserved us a nation. Then conquer we must, when our cause it is just, And this be our motto: \"In God is our trust.\" And the star-spangled banner in triumph shall wave O'er the land of the free and the home of the brave!"],
	["The Beatles - Hey Jude","Hey Jude, don't make it bad Take a sad song and make it better Remember to let her into your heart Then you can start to make it better Hey Jude, don't be afraid You were made to go out and get her The minute you let her under your skin Then you begin to make it better And anytime you feel the pain, hey Jude, refrain Don't carry the world upon your shoulders For well you know that it's a fool who plays it cool By making his world a little colder Nah nah nah nah nah nah nah nah nah Hey Jude, don't let me down You have found her, now go and get her Remember to let her into your heart Then you can start to make it better So let it out and let it in, hey Jude, begin You're waiting for someone to perform with And don't you know that it's just you, hey Jude, you'll do The movement you need is on your shoulder Nah nah nah nah nah nah nah nah nah yeah Hey Jude, don't make it bad Take a sad song and make it better Remember to let her under your skin Then you'll begin to make it Better better better better better better, oh Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude Nah nah nah nah nah nah, nah nah nah, hey Jude"],
	["Lorde - Royals", "I've never seen a diamond in the flesh I cut my teeth on wedding rings in the movies And I'm not proud of my address, in the torn up town No post code envy But every song's like gold teeth, grey goose, trippin' in the bathroom Blood stains, ball gowns, trashin' the hotel room, We don't care, we're driving cadillacs in our dreams. But everybody's like cristal, maybach, diamonds on your time piece. Jet planes, islands, tigers on a gold leash. We don't care, we aren't caught up in your love affair. And we'll never be royals... It don't run in our blood, That kind of lux just ain't for us. We crave a different kind of buzz. Let me be your ruler, you can call me queen B And baby I'll rule I'll rule I'll rule I'll rule. Let me live that fantasy. My friends and I we've cracked the code. We count our dollars on the train to the party. And everyone who knows us knows that we're fine with this, We didn't come from money. But every song's like gold teeth, grey goose, trippin' in the bathroom. Blood stains, ball gowns, trashin' the hotel room, We don't care, we're driving cadillacs in our dreams. But everybody's like cristal, maybach, diamonds on your time piece. Jet planes, islands, tigers on a gold leash We don't care we aren't caught up in your love affair And we'll never be royals, It don't run in our blood That kind of lux just ain't for us We crave a different kind of buzz. Let me be your ruler, you can call me queen B And baby I'll rule I'll rule I'll rule I'll rule. Let me live that fantasy. Oooh ooooh ohhh We're bigger than we ever dreamed, and I'm in love with being queen. Oooooh ooooh ohhhhh life is great without a care We aren't caught up in your love affair. And we'll never be royals, It don't run in our blood That kind of lux just ain't for us We crave a different kind of buzz Let me be your ruler, you can call me queen B And baby I'll rule I'll rule I'll rule I'll rule, Let me live that fantasy."],
	["OneRepublic", "Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be counting stars, yeah we'll be counting stars I see this life like a swinging vine Swing my heart across the line In my face is flashing signs Seek it out and ye shall find Old, but I'm not that old Young, but I'm not that bold I don't think the world is sold I'm just doing what we're told I feel something so right Doing the wrong thing I feel something so wrong Doing the right thing I could lie, could lie, could lie Everything that kills me makes me feel alive Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be counting stars Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be, we'll be counting stars I feel your love and I feel it burn Down this river, every turn Hope is a four-letter word Make that money, watch it burn Old, but I'm not that old Young, but I'm not that bold I don't think the world is sold I'm just doing what we're told I feel something so wrong Doing the right thing I could lie, could lie, could lie Everything that downs me, makes me wanna fly Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be counting stars Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be, we'll be counting stars Take that money Watch it burn Sink in the river The lessons I learned Take that money Watch it burn Sink in the river The lessons I learned Take that money Watch it burn Sink in the river The lessons I learned Take that money Watch it burn Sink in the river The lessons I learned Everything that kills me... makes me feel alive Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be counting stars Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been praying hard, Said no more counting dollars We'll be, we'll be, counting stars Take that money Watch it burn Sink in the river The lessons I learned Take that money Watch it burn Sink in the river The lessons I learned Take that money Watch it burn Sink in the river The lessons I learned Take that money Watch it burn Sink in the river The lessons I learned"]];
	return songs[Math.floor(Math.random()*songs.length)];
}

function parseLyrics(lies){
	var fin={};
	var a=lies.split(" ");
	for (var i = 0; i < a.length; i++) {
		var n = strippinTime(a[i]).toLowerCase();
		if(n.length>12){
			console.log(n);
			n = n.substring(0,2);
		}
		if(fin[n]==null){
			fin[n]=[[i,a[i]]];
		}
		else {
			var temp = fin[n];
			var temp2 = [[i,a[i]]];
			fin[n]=temp.concat(temp2);
		}
	}
	return [fin,a.length];
}

function size(obj){
	var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size + 1;
}

function checkDatLyric(lyric){
	return lyrics[lyric]!=null;
}

function strippinTime(words){
	return words.replace(/\W/g, '');
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

