import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tittle: string = 'cnrf';
  animals: string[] = ['neo', 'rneo', 'rof'];
  myJson = {
    currentUser: {
      image: {
        png: '../assets/images/avatars/image-juliusomo.png',
        webp: '../assets/images/avatars/image-juliusomo.webp',
      },
      username: 'juliusomo',
    },
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: '1 month ago',
        score: 12,
        user: {
          image: {
            png: '../assets/images/avatars/image-amyrobson.png',
            webp: '../assets/images/avatars/image-amyrobson.webp',
          },
          username: 'amyrobson',
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: '2 weeks ago',
        score: 5,
        user: {
          image: {
            png: '../assets/images/avatars/image-maxblagun.png',
            webp: '../assets/images/avatars/image-maxblagun.webp',
          },
          username: 'maxblagun',
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: '1 week ago',
            score: 4,
            replyingTo: 'maxblagun',
            user: {
              image: {
                png: '../assets/images/avatars/image-ramsesmiron.png',
                webp: '../assets/images/avatars/image-ramsesmiron.webp',
              },
              username: 'ramsesmiron',
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: '2 days ago',
            score: 2,
            replyingTo: 'ramsesmiron',
            user: {
              image: {
                png: '../assets/images/avatars/image-juliusomo.png',
                webp: '../assets/images/avatars/image-juliusomo.webp',
              },
              username: 'juliusomo',
            },
          },
        ],
      },
    ],
  };
  // ჯესონიდან როგორ ვქნა და არა ესე?

  showPopUp: boolean = false;
  newComment: string = '';
  error: string = '';
  indexOfComment: number = 0;
  globalId: number = 5;

  increase(index: number) {
    this.myJson.comments[index].score++;
  }
  decrease(index: number) {
    if (this.myJson.comments[index].score > 0) {
      this.myJson.comments[index].score--;
    }
  }

  isMe(index: number) {
    return;
  }

  //time ჩემით რომ არ მეწეროს?
  addComment() {
    if (this.newComment === '') {
      this.error =
        'Look Like You Missed Something. Please Fill In All Required Fields With Valid Information';
      return;
    }
    this.error = '';
    this.myJson.comments.push({
      id: this.globalId++,
      content: this.newComment,
      createdAt: 'now',
      score: 1,
      user: this.myJson.currentUser,
      replies: [],
    });
    console.log(this.newComment);
  }

  popUp(index: number) {
    this.indexOfComment = index;
    this.chageStateOfPopUp();
  }

  delete() {
    this.myJson.comments.splice(this.indexOfComment, 1);
    this.chageStateOfPopUp();
  }

  chageStateOfPopUp() {
    this.showPopUp = !this.showPopUp;
  }
}
