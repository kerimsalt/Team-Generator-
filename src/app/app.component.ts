import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  deleteMemberName = '';  // the member name to be deleted
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = ""; 
  teams: string[][] = [];

  addMember() {
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty string";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = "";
    this.errorMessage="";
  }

  onInput(member: any){
    this.newMemberName = member;
    //console.log(this.newMemberName);
  }

  delInput(member: any){
    this.deleteMemberName = member;
  }

  deleteMember(){
    const index = this.members.indexOf(this.deleteMemberName);
    if (index !== -1) {
      this.members.splice(index, 1);
      this.errorMessage="";
    }
    else{
      this.errorMessage = "The member is not in the list";
    }
    this.deleteMemberName = "";
  }

  setNumberOfTeams(n: String){
    this.numberOfTeams = Number(n);
  }

  generateTeams(n: number | string){
    if(n === "" || Number(n) <= 0 || (Number(n) > this.members.length)){
      this.errorMessage = "Please enter a valid number of teams";
    }
    else{
      this.errorMessage = "";
      const allMembers = [...this.members];

     while(allMembers.length > 0){
        for (let i = 0; i < allMembers.length; i++) {
          const randomIndex = Math.floor(Math.random() * allMembers.length);
          const member = allMembers.splice(randomIndex, 1)[0];
            if (!member) {
              break;
            }
            if (this.teams[i] ) {
              this.teams[i].push(member);
            }
            else{
              this.teams[i] = [member];
            }
          }
        }
    this.members = [];
    this.numberOfTeams = "";
    
    }
    
    
  }
  
}
