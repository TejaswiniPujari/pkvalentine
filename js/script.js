

function showGuidline() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('main').classList.add('main');
}
function hideGuidline() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('main').classList.remove('main');
}

const userRankText = {
    0: '1st Rank',
    1: '2nd Rank',
    2: '3rd Rank',
    3: '4th Rank',
    4: '5-10th Rank'
}
const talentRankTextRound1 = {
    0: 'target 05 Million & Above Gems ',
    1: 'target 03 - 05 Million Gems ',
    2: 'target 01 - 03 Million Gems',
    3: 'target 500K – 1 Million Gems ',
}
const userRewards = {
    0: 'User receives 25% of total beans pot',
    1: 'User receives 20% of total beans pot',
    2: 'User receives 15% of total beans pot',
    3: 'User receives 10% of total beans pot',
    4: 'User receives 5% of total beans pot'
}
const userRewardsImg = {
    0: 'img/user-rewards/BeansPot1.png',
    1: 'img/user-rewards/BeansPot2.png',
    2: 'img/user-rewards/BeansPot3.png',
    3: 'img/user-rewards/BeansPot4.png',
    4: 'img/user-rewards/BeansPot5.png'
}
const talentRewardsImgRound1 = {
    0: 'img/talent-rewards/Rewards2-3.png',
    1: 'img/talent-rewards/Rewards4.png',
    2: 'img/talent-rewards/Rewards4.png',
    3: 'img/talent-rewards/Rewards4.png',
}
const talentRewardsRound1 = {
    0: '10 Days Audio Room theme + Profile Frame',
    1: '5 Days Audio Room theme',
    2: '3 Days Audio Room theme',
    3: '1 Days Audio Room theme',
}
const talentRankTextRound2 = {
    0: 'target 10 Million & Above Gems ',
    1: 'target 05- 10 Million Gems ',
    2: 'target 03- 05 Million Gems ',
    3: 'target 01- 03 Million Gems ',
}
const talentRewardsImgRound2 = {
    0: 'img/talent-rewards/Rewards1.png',
    1: 'img/talent-rewards/Rewards2-3.png',
    2: 'img/talent-rewards/Rewards2-3.png',
    3: 'img/talent-rewards/Rewards4.png',
}
const talentRewardsRound2 = {
    0: '15 days PK SUPER STAR BADGE + Audio theme of PK SuperStar + PK SUperStar Profile Frame',
    1: '10 days Audio theme of PK SuperStar + PK SUperStar Profile Frame',
    2: '07 days Audio theme of PK SuperStar',
    3: '5 days Audio theme of PK SuperStar',
}
let slideNumber = 0;
let mode = 'user';
let round = 1;
let leaderboardMode = 'user';
let leaderboardRound = 1;

function setRewardData() {
    if (mode == 'user') {
        document.getElementById('reward-rank').innerHTML = userRankText[slideNumber];
        document.getElementById('reward-description').innerHTML = userRewards[slideNumber];
        document.getElementById('reward-img').src = userRewardsImg[slideNumber];
    }
    else {
        document.getElementById('reward-rank').innerHTML = round === 1 ? talentRankTextRound1[slideNumber] : talentRankTextRound2[slideNumber];
        document.getElementById('reward-description').innerHTML = round === 1 ? talentRewardsRound1[slideNumber] : talentRewardsRound2[slideNumber];
        document.getElementById('reward-img').src = round === 1 ? talentRewardsImgRound1[slideNumber] : talentRewardsImgRound2[slideNumber];
    }
}

function onLeft() {
    if (slideNumber > 0) {
        slideNumber = slideNumber - 1;
        setRewardData();
    }
}

function onRight() {
    if (slideNumber < 4 && mode == 'user') {
        slideNumber = slideNumber + 1;
        setRewardData();
    }
    else if (slideNumber < 3 && mode == 'talent') {
        slideNumber = slideNumber + 1;
        setRewardData();
    }
}

function setUserModeOnRewards() {
    document.getElementById('reward-userbtn').src = "img/userBtn.png";
    document.getElementById('reward-talentbtn').src = "img/talentUnselectedBtn.png";
    document.getElementById('talents-tab').style.display = 'none';
    mode = 'user';
    slideNumber = 0;
    setRewardData();
}

function setTalentModeOnRewards() {
    document.getElementById('reward-userbtn').src = "img/userUnselectedBtn.png";
    document.getElementById('reward-talentbtn').src = "img/talentBtn.png";
    document.getElementById('talents-tab').style.display = 'block';
    mode = 'talent';
    slideNumber = 0;
    setRewardData();
}

function setRound1OnRewards() {
    document.getElementById('reward-round1btn').src = "img/round1btn.png";
    document.getElementById('reward-round2btn').src = "img/round2UnselectedBtn.png";
    round = 1;
    slideNumber = 0;
    setRewardData();
}

function setRound2OnRewards() {
    document.getElementById('reward-round1btn').src = "img/round1UnselectedBtn.png";
    document.getElementById('reward-round2btn').src = "img/round2btn.png";
    round = 2;
    slideNumber = 0;
    setRewardData();
}

function setRound1OnSchedule() {
    document.getElementById('schedule-round1btn').src = "img/round1btn.png";
    document.getElementById('schedule-round2btn').src = "img/round2UnselectedBtn.png";
    document.getElementById('round1-schedule').style.display = 'block';
    document.getElementById('round2-schedule').style.display = 'none';
}

function setRound2OnSchedule() {
    document.getElementById('schedule-round1btn').src = "img/round1UnselectedBtn.png";
    document.getElementById('schedule-round2btn').src = "img/round2btn.png";
    document.getElementById('round1-schedule').style.display = 'none';
    document.getElementById('round2-schedule').style.display = 'block';
}

function setLeaderboardData() {
    if (leaderboardMode === 'user') {
        document.getElementById('leaderboard-talent-round1').display = 'none';
        document.getElementById('leaderboard-talent-round2').display = 'none';
        if (leaderboardRound === 1) {
            document.getElementById('leaderboard-user-round1').display = 'block';
            document.getElementById('leaderboard-user-round2').display = 'none';
        }
        else {
            document.getElementById('leaderboard-user-round1').display = 'none';
            document.getElementById('leaderboard-user-round2').display = 'block';
        }
    }
    else {
        document.getElementById('leaderboard-user-round1').display = 'none';
        document.getElementById('leaderboard-user-round2').display = 'none';
        if (leaderboardRound === 1) {
            document.getElementById('leaderboard-talent-round1').display = 'block';
            document.getElementById('leaderboard-talent-round2').display = 'none';
        }
        else {
            document.getElementById('leaderboard-talent-round1').display = 'none';
            document.getElementById('leaderboard-talent-round2').display = 'block';
        }
    }
}

function setUserModeOnLeaderboard() {
    document.getElementById('leaderboard-userbtn').src = "img/userBtn.png";
    document.getElementById('leaderboard-talentbtn').src = "img/talentUnselectedBtn.png";
    leaderboardMode = 'user';
    leaderboardRound = 1;
    setLeaderboardData();
}

function setTalentModeOnLeaderboard() {
    document.getElementById('leaderboard-userbtn').src = "img/userUnselectedBtn.png";
    document.getElementById('leaderboard-talentbtn').src = "img/talentBtn.png";
    leaderboardMode = 'talent';
    leaderboardRound = 1;
    setLeaderboardData();
}

function setRound1OnLeaderboard() {
    document.getElementById('leaderboard-round1btn').src = "img/round1btn.png";
    document.getElementById('leaderboard-round2btn').src = "img/round2UnselectedBtn.png";
    leaderboardRound = 1;
    setLeaderboardData();
}

function setRound2OnLeaderboard() {
    document.getElementById('leaderboard-round1btn').src = "img/round1UnselectedBtn.png";
    document.getElementById('leaderboard-round2btn').src = "img/round2btn.png";
    leaderboardRound = 2;
    setLeaderboardData();
}