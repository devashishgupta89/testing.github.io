class Arrow {

    constructor()
    {
        this.x=this.y=0;
	    this.dir=0;
    }
	
	set( _x, _y, _dir)
	{
		this.x =_x;
		this.y =_y;
		this.dir=_dir;
	}
	update()
	{
		switch (this.dir) {
		case 0:
            this.x +=.04;
			break;
		case 1:
            this.y +=.04;
			break;
		case 2:
            this.x -=.04;
			break;
		case 3:
            this.y -=.04;
			break;
        }
	}
}
