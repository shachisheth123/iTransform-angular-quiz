import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService{

    baseUrl='app/api/quiz-questions.json'
    constructor(private http:HttpClient){
        var obj;
         this.getJSON().subscribe(data => obj=data, error => console.log(error));
        
    }

    findAll() : Observable<Quiz[]>{
        return this.http.get<Quiz[]>(this.baseUrl);
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/mydata.json");

    }


}