class GroupsController < ApplicationController

  def index
  end

  def new
    @group = Group.new
    # 空のインスタンスを代入。form_withで使うための変数
    @group.users << current_user
    # 配列に要素を追加するため　＜＜
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
     @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを更新しました'
    else
      render :edit
    end
  end


  private
  def group_params
    params.require(:group).permit(:name, user_ids: [] )
  end

  # def set_group
  #   @group = Group.find(params[:id])
  # end

end