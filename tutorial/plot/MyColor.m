function C = MyColor(name, varargin)

    % save('plot/MyColor.mat', 'color');

    % ip = inputParser();
    % ip.addParameter('name', {});
    % ip.parse(varargin{:});
    % ip = ip.Results;

    data = load('MyColor.mat');
    for i = 1:length(data.color)
        if strcmp(name, data.color{i}.name)
            C = data.color{i}.rgb;
            break
        end
    end

end
